const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const {
  ORDER, ESSENTIAL, GROUPS, orderedLessonIds, attemptStatus,
  normalizeStudyState, studyRouteIds, studyResumeHash,
  newExamAttempt, finishExamAttempt, persistStudyState
} = require('../dist/app.js');

const context = vm.createContext({window:{}});
vm.runInContext(fs.readFileSync(path.join(__dirname,'../dist/data/lessons.js'),'utf8'),context);
const lessons = JSON.parse(JSON.stringify(context.window.LESSONS));
const exams = [{id:'exam1',duration:60},{id:'exam2',duration:90}];
const state = (raw={},now=1000) => normalizeStudyState(raw,lessons,exams,now);

test('one curriculum order includes all 30 actual lessons and 21 priority lessons',()=>{
  assert.equal(ORDER.length,30);
  assert.equal(new Set(ORDER).size,30);
  assert.deepEqual([...ORDER].sort(),lessons.map(l=>l.id).sort());
  assert.deepEqual(ORDER,GROUPS.flatMap(group=>group.ids));
  assert.equal(ESSENTIAL.length,21);
  assert.equal(ORDER.indexOf('binary-files'),ORDER.indexOf('text-files')+1);
  assert.equal(ORDER.indexOf('recursion'),ORDER.indexOf('custom-exceptions')+1);
  assert.deepEqual(orderedLessonIds([...lessons].reverse()),ORDER);
});

test('priority navigation and full navigation share the same order',()=>{
  assert.deepEqual(studyRouteIds(state(),lessons,'exceptions'),ESSENTIAL);
  assert.deepEqual(studyRouteIds(state({route:'full'}),lessons),ORDER);
  assert.deepEqual(studyRouteIds(state(),lessons,'text-files'),ORDER);
});

test('resume retains the exact last lesson and tab even when not completed',()=>{
  const progress=state({lastLesson:'inheritance',lastTab:'challenge',done:[]});
  assert.equal(studyResumeHash(progress,lessons),'#learn/inheritance/challenge');
  assert.equal(studyResumeHash(state({lastLesson:'removed',lastTab:'invalid'}),lessons),'#learn/hello/learn');
});

test('legacy migration recovers all attempts and guided backup without changing source',()=>{
  const raw={drafts:{
    'attempt:exam1:100':{code:'first unfinished source'},
    'attempt:exam1:200':{code:'second source'},
    'attempt:exam2:300':{code:'live source',stdin:'18'},
    'exam:exam1':{code:'guided draft'},
    'exam:exam1:previous':{code:'older guided source'}
  },timer:{id:'exam2',started:300,end:9000}};
  const before=JSON.stringify(raw);
  const migrated=state(raw);
  assert.equal(migrated.examAttempts.length,4);
  assert.deepEqual(migrated.drafts,raw.drafts);
  assert.equal(migrated.examAttempts.find(a=>a.key==='attempt:exam2:300').status,'active');
  assert.equal(migrated.examAttempts.find(a=>a.key==='attempt:exam1:100').status,'archived');
  assert.equal(migrated.examAttempts.find(a=>a.key==='exam:exam1:previous').kind,'guided-backup');
  assert.equal(JSON.stringify(raw),before,'migration must not modify its input');
  assert.equal(migrated.timer.key,'attempt:exam2:300');
});

test('migration is idempotent and preserves separately edited review drafts',()=>{
  const once=state({drafts:{'attempt:exam1:100':{code:'original'},'review:attempt:exam1:100':{code:'review changes'}},timer:null});
  const twice=state(JSON.parse(JSON.stringify(once)));
  assert.deepEqual(twice,once);
  assert.equal(twice.examAttempts.length,1);
});

test('expired legacy timer stays expired after reload rather than restarting time',()=>{
  const migrated=state({timer:{id:'exam1',started:100,end:500},drafts:{'attempt:exam1:100':{code:'expired code'}}},1000);
  const attempt=migrated.examAttempts[0];
  assert.equal(attempt.status,'expired');
  assert.equal(attempt.end,500);
  assert.equal(attemptStatus(attempt,2000),'expired');
  assert.equal(migrated.drafts[attempt.key].code,'expired code');
});

test('new attempts have distinct draft keys even when created in the same millisecond',()=>{
  const progress=state({drafts:{'exam:exam1':{code:'guided source'}}});
  const a=newExamAttempt(progress,exams[0],5000,'starter one');
  progress.drafts[a.key].code='learner first attempt';
  const b=newExamAttempt(progress,exams[0],5000,'starter two');
  assert.notEqual(a.key,b.key);
  assert.equal(progress.examAttempts.length,2);
  assert.equal(progress.drafts[a.key].code,'learner first attempt');
  assert.equal(progress.drafts[b.key].code,'starter two');
  assert.equal(progress.drafts['exam:exam1'].code,'guided source');
  assert.equal(a.end,5000+60*60000);
});

test('starting another exam never erases the previous active attempt',()=>{
  const progress=state();
  const a=newExamAttempt(progress,exams[0],5000,'exam one');
  const b=newExamAttempt(progress,exams[1],6000,'exam two');
  const restored=state(JSON.parse(JSON.stringify(progress)),7000);
  assert.equal(restored.examAttempts.filter(a=>a.status==='active').length,2);
  assert.equal(restored.drafts[a.key].code,'exam one');
  assert.equal(restored.drafts[b.key].code,'exam two');
  assert.equal(restored.timer.key,b.key);
});

test('finishing an older attempt retains original and guided source and newer timer',()=>{
  const progress=state({drafts:{'exam:exam1':{code:'guided'}}});
  const first=newExamAttempt(progress,exams[0],1000,'attempt source');
  const second=newExamAttempt(progress,exams[1],2000,'another attempt');
  assert.equal(finishExamAttempt(progress,first.key,3000).status,'finished');
  assert.equal(progress.examAttempts.find(a=>a.key===first.key).finishedAt,3000);
  assert.equal(progress.drafts[first.key].code,'attempt source');
  assert.equal(progress.drafts['exam:exam1'].code,'guided');
  assert.equal(progress.timer.key,second.key);
  finishExamAttempt(progress,second.key,4000);
  assert.equal(progress.timer,null);
});

test('a completed attempt remains completed even before its original deadline',()=>{
  assert.equal(attemptStatus({status:'finished',end:9000},1000),'finished');
  assert.equal(attemptStatus({status:'archived',end:9000},1000),'archived');
  assert.equal(attemptStatus({status:'active',end:1000},1000),'expired');
});

test('malformed optional metadata does not discard unrelated saved drafts or quiz scores',()=>{
  const progress=state({drafts:{'free':{code:'keep this'}},quiz:{hello:{score:2,total:3}},timer:{id:'missing',started:1,end:9},examAttempts:null,lastTab:'quiz'});
  assert.equal(progress.timer,null);
  assert.equal(progress.drafts.free.code,'keep this');
  assert.deepEqual(progress.quiz.hello,{score:2,total:3});
  assert.equal(progress.lastTab,'quiz');
});

test('save failure keeps the live state recoverable and the next successful save recovers',()=>{
  const progress=state({drafts:{free:{code:'latest unsaved code'}}});
  const failed=persistStudyState({setItem(){throw new Error('Quota exceeded')}},progress);
  assert.equal(failed.ok,false);
  assert.equal(progress.drafts.free.code,'latest unsaved code');
  let stored;
  const recovered=persistStudyState({setItem(key,value){assert.equal(key,'khutwa-cs113-v1');stored=value}},progress);
  assert.equal(recovered.ok,true);
  assert.equal(JSON.parse(stored).drafts.free.code,'latest unsaved code');
});
