const fs=require('fs'),vm=require('vm'),assert=require('assert');
const root=process.argv[2]||require('path').resolve(__dirname,'../dist');
const ctx={window:{}};vm.createContext(ctx);
for(const f of ['lessons','exams','checks'])vm.runInContext(fs.readFileSync(`${root}/data/${f}.js`,'utf8'),ctx,{filename:f});
const {LESSONS,EXAMS,EXAM_CHECKS,GLOSSARY}=ctx.window;
assert.equal(LESSONS.length,30,'Expected completed 30-lesson curriculum');assert.equal(EXAMS.length,4);
assert.equal(new Set(LESSONS.map(l=>l.id)).size,LESSONS.length);
const required=['hello','values','conditions','loops','methods','arrays','objects','constructors','references','object-arrays','uml','inheritance','polymorphism','abstract','interfaces','exceptions','custom-exceptions','text-files','binary-files','serialization','gui-basics','gui-events','gui-controls','linked-lists','stack-queue','generics','recursion','integrated-lab','debugging','eclipse'];
for(const id of required)assert(LESSONS.some(l=>l.id===id),id);
for(const l of LESSONS){assert(l.sections.length>=5,l.id+' depth');assert(l.starter&&l.solution&&l.challenge&&l.hints.length>=3,l.id);assert(l.minutes>0);for(const q of l.quiz){assert(q.answer>=0&&q.answer<q.choices.length);assert(q.explanation)}assert(l.source)}
assert(GLOSSARY.length>=20,'glossary');
let checks=0;for(const e of EXAMS){assert(fs.existsSync(`${root}/${e.pdf}`),e.id);assert(e.sourceNotes.length>0);assert(e.tasks.length>4);assert(e.rubric.length>0);assert(e.solution);const c=EXAM_CHECKS[e.id];assert(c.code.includes(c.className));checks+=c.count}
for(const f of ['index.html','styles.css','app.js','java-runner.js','java-frame.js','java-frame.html','assets/runtime/asm-9.8.jar','assets/runtime/ASM-LICENSE.txt'])assert(fs.statSync(`${root}/${f}`).size>0);
console.log(JSON.stringify({lessons:LESSONS.length,sections:LESSONS.reduce((n,l)=>n+l.sections.length,0),quizzes:LESSONS.reduce((n,l)=>n+l.quiz.length,0),glossary:GLOSSARY.length,exams:EXAMS.length,behavioralChecks:checks,estimatedMinutes:LESSONS.reduce((n,l)=>n+l.minutes,0)}));
