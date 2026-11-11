/* Real Java execution. CheerpJ/OpenJDK compile and run in the user's browser. */
(function () {
  'use strict';
  const base = new URL('.', document.currentScript.src);
  let frame = null, session = null, readyPromise = null, readyResolve = null, readyReject = null;
  let runGeneration = 0, preparingRun = false;
  let current = null, statusCallback = null, initTimer = null, executionTimer = null;
  const pendingFiles = new Map();
  const MAX_OUTPUT = 250000;
  function status(message) {
    if (current && current.onStatus) current.onStatus(message);
    else if (statusCallback) statusCallback(message);
  }
  function makeFrame(onStatus) {
    statusCallback = onStatus || statusCallback;
    if (readyPromise) return readyPromise;
    const host = document.getElementById('runtime-host') || document.body;
    session = crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random();
    frame = document.createElement('iframe');
    frame.title = 'نافذة برنامج Java الحقيقي';
    frame.setAttribute('aria-label', 'نافذة برنامج Java الحقيقي');
    frame.style.cssText = 'display:none;width:100%;height:540px;border:0;border-radius:12px;background:#f5f5f5;';
    frame.src = new URL('java-frame.html', base).href + '#' + session;
    readyPromise = new Promise((resolve, reject) => { readyResolve = resolve; readyReject = reject; });
    host.appendChild(frame);
    status('تحميل Java الحقيقي… أول تشغيل يحتاج إنترنت وقد يأخذ دقيقة.');
    initTimer = setTimeout(() => {
      const error = new Error('تعذّر تجهيز Java خلال دقيقتين. تأكد من الإنترنت ثم اضغط تشغيل مجددًا.');
      const reject = readyReject;
      teardown();
      if (reject) reject(error);
    }, 120000);
    return readyPromise;
  }
  function teardown() {
    clearTimeout(initTimer); clearTimeout(executionTimer);
    if (frame) frame.remove();
    frame = null; session = null; readyPromise = null; readyResolve = null; readyReject = null;
    for (const p of pendingFiles.values()) p.reject(new Error('انتهت جلسة Java.'));
    pendingFiles.clear();
  }
  function finish(result) {
    if (!current || current.finished) return;
    clearTimeout(executionTimer);
    current.finished = true;
    current.resolve({ stdout: current.stdout, stderr: current.stderr, files: [], ...result });
  }
  function stop(reason) {
    runGeneration++; preparingRun = false;
    if (current && !current.finished) {
      if (reason) current.stderr += '\n' + reason;
      finish({ exitCode: 130, stopped: true });
    }
    const reject = readyReject;
    teardown();
    if (reject) reject(new Error('أُوقفت جلسة Java.'));
    current = null;
    status(reason || 'تم إيقاف البرنامج.');
  }
  window.addEventListener('message', event => {
    const m = event.data;
    if (!frame || event.source !== frame.contentWindow || !m || m.cs113Java !== session) return;
    if (m.type === 'status') { status(m.message); return; }
    if (m.type === 'ready') {
      clearTimeout(initTimer);
      if (readyResolve) readyResolve(true);
      readyResolve = null; readyReject = null;
      status('Java جاهز.');
      return;
    }
    if (m.type === 'error') {
      const err = new Error(m.message);
      if (readyReject) { const reject = readyReject; teardown(); reject(err); }
      else {
        if (current) {
          current.stderr += m.message + '\n';
          if (current.onOutput) current.onOutput(m.message + '\n', 'stderr');
        }
        finish({ exitCode: -1, runtimeError: true });
        status(m.message);
      }
      return;
    }
    if (m.type === 'files') {
      const p = pendingFiles.get(m.requestId);
      if (p) { pendingFiles.delete(m.requestId); p.resolve(m.files); }
      return;
    }
    if (!current) return;
    if (m.type === 'output') {
      const stream = m.stream === 'stderr' ? 'stderr' : 'stdout';
      current[stream] += m.text;
      if (current.onOutput) current.onOutput(m.text, stream);
      if (current.stdout.length + current.stderr.length > MAX_OUTPUT) stop('أوقفنا البرنامج لأن مخرجاته كثيرة جدًا. راجع شرط الحلقة.');
    } else if (m.type === 'running') {
      status(current.gui ? 'برنامجك يعمل. جرّب النافذة والأزرار بالأسفل.' : 'يعمل برنامجك الآن…');
      if (!current.gui) executionTimer = setTimeout(() => stop('أوقفنا التنفيذ بعد 20 ثانية. راجع الحلقات أو مدخلات البرنامج.'), 20000);
    } else if (m.type === 'done') {
      finish({ exitCode: m.exitCode, files: m.files || [], gui: current.gui });
      status(m.exitCode === 0 ? (current.gui ? 'تم تشغيل البرنامج — النافذة جاهزة للتجربة.' : 'اكتمل التنفيذ بنجاح.') : 'راجع رسالة الخطأ ثم عدّل برنامجك.');
    }
  });
  async function run(options = {}) {
    if (!options.code || !options.code.trim()) throw new Error('اكتب برنامجًا أولًا.');
    if (current || preparingRun) stop();
    const generation = ++runGeneration;
    preparingRun = true;
    const gui = Boolean(options.gui);
    try { await makeFrame(options.onStatus); } finally { if (generation === runGeneration) preparingRun = false; }
    if (generation !== runGeneration) throw new Error('أُلغيت جلسة Java.');
    frame.style.display = gui ? 'block' : 'none';
    const result = new Promise(resolve => {
      current = { resolve, stdout: '', stderr: '', onOutput: options.onOutput, onStatus: options.onStatus, gui, finished: false };
    });
    frame.contentWindow.postMessage({ cs113Java: session, type: 'run', payload: {
      code: String(options.code), stdin: String(options.stdin || ''), files: options.files || {},
      mainClass: options.mainClass || '', gui, args: options.args || []
    } }, location.origin);
    return result;
  }
  function readFiles() {
    if (!frame || !readyPromise) return Promise.resolve([]);
    const requestId = Math.random().toString(36).slice(2);
    return new Promise((resolve, reject) => {
      pendingFiles.set(requestId, { resolve, reject });
      frame.contentWindow.postMessage({ cs113Java: session, type: 'files', requestId }, location.origin);
      setTimeout(() => { if (pendingFiles.has(requestId)) { pendingFiles.delete(requestId); reject(new Error('تعذّر قراءة الملفات.')); } }, 15000);
    });
  }
  window.JavaRunner = { init: makeFrame, run, stop, reset: stop, readFiles,
    info: { engine: 'CheerpJ 5.0 / OpenJDK 17', compilation: 'javac', execution: 'in-browser', docs: 'https://cheerpj.com/docs/overview' } };
})();
