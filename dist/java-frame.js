(function () {
  'use strict';
  const session = location.hash.slice(1);
  const send = (type, data = {}) => parent.postMessage({ cs113Java: session, type, ...data }, location.origin);
  let lib, Javac, File, Files, Paths, CopyOption, StringWriter, PrintWriter;
  let started = false, ended = false, appRunning = false;
  const BOOTSTRAP = `package cs113.runtime;
import java.io.*;
import java.lang.reflect.*;
import org.objectweb.asm.*;
public class CS113Bootstrap {
  private static long lastCheck = System.nanoTime(), burstStart = lastCheck;
  private static int ticks;
  public static final class ExecutionLimitError extends Error {
    public ExecutionLimitError() { super("Execution limit: a loop used the CPU continuously for over 3 seconds. Check the loop condition."); }
  }
  public static void tick() {
    if ((++ticks & 255) != 0) return;
    long now = System.nanoTime();
    if (now - lastCheck > 1000000000L) burstStart = now;
    lastCheck = now;
    if (now - burstStart > 3000000000L) throw new ExecutionLimitError();
  }
  private static void instrument(File dir) throws IOException {
    File[] children = dir.listFiles(); if (children == null) return;
    for (File file : children) {
      if (file.isDirectory()) { instrument(file); continue; }
      if (!file.getName().endsWith(".class")) continue;
      byte[] original = java.nio.file.Files.readAllBytes(file.toPath());
      ClassReader reader = new ClassReader(original);
      if (reader.getClassName().startsWith("cs113/runtime/CS113Bootstrap")) continue;
      ClassWriter writer = new ClassWriter(reader, 0);
      reader.accept(new ClassVisitor(Opcodes.ASM9, writer) {
        public MethodVisitor visitMethod(int access, String name, String descriptor, String signature, String[] exceptions) {
          MethodVisitor visitor = super.visitMethod(access, name, descriptor, signature, exceptions);
          return new MethodVisitor(Opcodes.ASM9, visitor) {
            private void guard() { super.visitMethodInsn(Opcodes.INVOKESTATIC, "cs113/runtime/CS113Bootstrap", "tick", "()V", false); }
            public void visitCode() { super.visitCode(); guard(); }
            public void visitJumpInsn(int opcode, Label label) { guard(); super.visitJumpInsn(opcode, label); }
          };
        }
      }, 0);
      java.nio.file.Files.write(file.toPath(), writer.toByteArray());
    }
  }
  private static native void emit(String stream, String text);
  private static native void completed(int exitCode);
  private static class Bridge extends OutputStream {
    private final String stream;
    private final ByteArrayOutputStream bytes = new ByteArrayOutputStream();
    Bridge(String stream) { this.stream = stream; }
    public synchronized void write(int value) { bytes.write(value); }
    public synchronized void write(byte[] value, int off, int len) { bytes.write(value, off, len); }
    public synchronized void flush() throws IOException {
      if(bytes.size() > 0) { String text = bytes.toString("UTF-8"); bytes.reset(); emit(stream, text); }
    }
  }
  public static void main(String[] args) {
    int code = 0;
    try {
      System.setOut(new PrintStream(new Bridge("stdout"), true, "UTF-8"));
      System.setErr(new PrintStream(new Bridge("stderr"), true, "UTF-8"));
      System.setIn(new FileInputStream("/str/cs113-stdin.txt"));
      instrument(new File(args[1]));
      lastCheck = burstStart = System.nanoTime();
      Class<?> clazz = Class.forName(args[0]);
      Method main = clazz.getMethod("main", String[].class);
      main.setAccessible(true);
      String[] passed = new String[args.length-2];
      System.arraycopy(args, 2, passed, 0, passed.length);
      main.invoke(null, (Object)passed);
    } catch(Throwable error) {
      code = 1;
      Throwable cause = error instanceof InvocationTargetException ? error.getCause() : error;
      cause.printStackTrace(System.err);
    } finally {
      System.out.flush(); System.err.flush(); completed(code);
    }
  }
}`;
  async function errorText(error) {
    try { if (error && typeof error.toString === 'function') return String(await error.toString()); } catch (_) {}
    return String(error && error.message || error);
  }
  function safeName(name) {
    name = String(name).replace(/\\/g, '/').replace(/^\.\//, '');
    if (!name || name.startsWith('/') || name.split('/').some(p => p === '..' || p === '.' || !p) || /[\x00-\x1f]/.test(name)) throw new Error('اسم ملف غير صالح: ' + name);
    return name;
  }
  async function collectFiles() {
    const found = [];
    async function walk(dir, prefix, depth) {
      if (depth > 3 || found.length >= 30) return;
      const list = await dir.listFiles();
      if (!list) return;
      for (let i = 0; i < list.length; i++) {
        const entry = list[i], name = String(await entry.getName());
        if (name.startsWith('.cs113') || name === 'downloads' || name === 'uploads' || /\.(class|java)$/.test(name)) continue;
        const path = prefix ? prefix + '/' + name : name;
        if (await entry.isDirectory()) { await walk(entry, path, depth + 1); continue; }
        const size = Number(await entry.length());
        if (size > 1000000) { found.push({name:path,size,tooLarge:true}); continue; }
        const blob = await cjFileBlob('/files/' + path);
        const bytes = new Uint8Array(await blob.arrayBuffer());
        let binary = '';
        for (let start = 0; start < bytes.length; start += 16384) binary += String.fromCharCode(...bytes.subarray(start,start+16384));
        const result = { name: path, size, base64: btoa(binary) };
        try { const text = new TextDecoder('utf-8', {fatal:true}).decode(bytes); if (!text.includes('\u0000')) result.text = text; } catch (_) {}
        found.push(result);
      }
    }
    await walk(await new File('/files'), '', 0);
    return found;
  }
  async function completed(exitCode) {
    if (ended) return;
    ended = true;
    let files = [];
    try { files = await collectFiles(); } catch (_) {}
    send('done', {exitCode, files});
  }
  async function initialize() {
    const script = document.createElement('script');
    script.src = 'https://cjrtnc.leaningtech.com/5.0/loader.js';
    await new Promise((resolve, reject) => {
      script.onload = resolve;
      script.onerror = () => reject(new Error('تعذّر تحميل Java. تحقق من اتصال الإنترنت أو جرّب Chrome.'));
      document.head.appendChild(script);
    });
    send('status', {message:'تجهيز OpenJDK والمترجم…'});
    await cheerpjInit({version:17, status:'none', clipboardMode:'java', natives: {
      Java_cs113_runtime_CS113Bootstrap_emit: async (_lib, stream, text) => send('output', {stream:String(stream),text:String(text)}),
      Java_cs113_runtime_CS113Bootstrap_completed: async (_lib, exitCode) => { void completed(exitCode); }
    }});
    cheerpjCreateDisplay(-1, -1, document.getElementById('display'));
    lib = await cheerpjRunLibrary('');
    Javac = await lib.com.sun.tools.javac.Main;
    File = await lib.java.io.File;
    Files = await lib.java.nio.file.Files;
    Paths = await lib.java.nio.file.Paths;
    CopyOption = await lib.java.nio.file.StandardCopyOption;
    StringWriter = await lib.java.io.StringWriter;
    PrintWriter = await lib.java.io.PrintWriter;
    const asmResponse = await fetch('assets/runtime/asm-9.8.jar');
    if (!asmResponse.ok) throw new Error('تعذّر تحميل حماية الحلقات. حدّث الصفحة وحاول مجددًا.');
    cheerpOSAddStringFile('/str/cs113-asm.jar', new Uint8Array(await asmResponse.arrayBuffer()));
    send('ready');
  }
  async function run(payload) {
    if (started) throw new Error('هذه الجلسة استُخدمت بالفعل. اضغط تشغيل مجددًا.');
    started = true;
    send('status', {message:'ترجمة برنامجك باستخدام javac…'});
    // This only chooses the Java filename/main entry point. javac handles the language itself.
    const cleaned = payload.code.replace(/"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\])*'|\/\*[\s\S]*?\*\/|\/\/[^\r\n]*/g, ' ');
    const publicClass = cleaned.match(/\bpublic\s+(?:(?:abstract|final|strictfp)\s+)*class\s+([A-Za-z_$][\w$]*)/);
    const anyClass = cleaned.match(/\bclass\s+([A-Za-z_$][\w$]*)/);
    const packageMatch = cleaned.match(/\bpackage\s+([\w.]+)\s*;/);
    const simpleClass = publicClass ? publicClass[1] : anyClass ? anyClass[1] : 'Main';
    const mainClass = payload.mainClass || (packageMatch ? packageMatch[1] + '.' : '') + simpleClass;
    const runDir = '/files/.cs113-' + session;
    await (await new File(runDir)).mkdirs();
    cheerpOSAddStringFile('/str/' + simpleClass + '.java', payload.code);
    cheerpOSAddStringFile('/str/CS113Bootstrap.java', BOOTSTRAP);
    cheerpOSAddStringFile('/str/cs113-stdin.txt', payload.stdin);
    const sourcePaths = ['/str/' + simpleClass + '.java', '/str/CS113Bootstrap.java'];
    for (const [rawName, content] of Object.entries(payload.files || {})) {
      const name = safeName(rawName);
      if (name === simpleClass + '.java' || name === 'CS113Bootstrap.java') continue;
      let bytes = content;
      if (content && typeof content === 'object' && content.base64 != null) bytes = Uint8Array.from(atob(content.base64), c=>c.charCodeAt(0));
      else if (content && typeof content === 'object' && content.text != null) bytes = String(content.text);
      else if (typeof content !== 'string' && !(content instanceof Uint8Array)) bytes = String(content);
      cheerpOSAddStringFile('/str/' + name, bytes);
      if (/\.java$/i.test(name)) { if (name !== simpleClass + '.java') sourcePaths.push('/str/' + name); continue; }
      const target = await new File('/files/' + name);
      await (await target.getParentFile()).mkdirs();
      await Files.copy(await Paths.get('/str/' + name), await Paths.get('/files/' + name), [CopyOption.REPLACE_EXISTING]);
    }
    const diagnostics = await new StringWriter();
    const writer = await new PrintWriter(diagnostics);
    const compileCode = await Javac.compile(['-classpath','/str/cs113-asm.jar','-encoding','UTF-8','-source','8','-target','8','-Xlint:-options','-d',runDir,...sourcePaths], writer);
    await writer.flush();
    const messages = String(await diagnostics.toString());
    if (messages) send('output',{stream:'stderr',text:messages.replaceAll('/str/','')});
    if (compileCode !== 0) { await completed(compileCode); return; }
    appRunning = true;
    send('running');
    // Each run lives in a fresh iframe. Removing the iframe terminates loops and GUI threads.
    const exitCode = await cheerpjRunMain('cs113.runtime.CS113Bootstrap', runDir + ':/str/cs113-asm.jar', mainClass, runDir, ...payload.args.map(String));
    appRunning = false;
    if (!ended) await completed(exitCode);
  }
  const ready = initialize().catch(async error => { send('error', {message:await errorText(error)}); throw error; });
  window.addEventListener('message', async event => {
    if (event.source !== parent || event.origin !== location.origin || !event.data || event.data.cs113Java !== session) return;
    try {
      await ready;
      if (event.data.type === 'run') await run(event.data.payload);
      else if (event.data.type === 'files') send('files',{requestId:event.data.requestId,files:await collectFiles()});
    } catch (error) { send('error', {message:await errorText(error)}); }
  });
})();
