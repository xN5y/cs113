/* Java syntax coloring and editor adapter. CodeMirror is bundled locally. */
(function () {
  'use strict';

  const MODE = 'text/x-cs113-java';
  const THEME = 'eclipse-java';
  const CM = window.CodeMirror;
  const highlighted = new WeakMap();
  let current = null;

  if (CM && CM.defineMIME) {
    const java = CM.resolveMode('text/x-java');
    const keywords = Object.assign({}, java.keywords);
    // Eclipse treats Java primitives and literals as keywords. Class names,
    // including String and Integer, retain the normal identifier treatment.
    'byte short int long float double boolean char void true false null'.split(' ')
      .forEach(word => { keywords[word] = true; });
    CM.defineMIME(MODE, Object.assign({}, java, { keywords }));
  }

  function notify(instance) {
    if (instance !== current) return;
    if (instance.cm) instance.cm.save();
    if (typeof instance.options.onChange === 'function') {
      instance.options.onChange(instance.textarea.value);
    }
  }

  function mount(textarea, options = {}) {
    destroy();
    if (!textarea) return null;
    const instance = { textarea, options, cm: null };
    current = instance;

    const run = () => { if (typeof options.onRun === 'function') options.onRun(); };
    const escape = () => { if (typeof options.onEscape === 'function') options.onEscape(); };

    if (CM && CM.fromTextArea) {
      const cm = CM.fromTextArea(textarea, {
        mode: MODE,
        theme: THEME,
        lineNumbers: true,
        lineWrapping: false,
        direction: 'ltr',
        inputStyle: 'contenteditable',
        screenReaderLabel: textarea.getAttribute('aria-label') || 'محرر Java',
        spellcheck: false,
        autocorrect: false,
        autocapitalize: false,
        indentUnit: 4,
        tabSize: 4,
        indentWithTabs: false,
        styleActiveLine: true,
        extraKeys: {
          'Ctrl-Enter': run,
          'Cmd-Enter': run,
          'Esc': escape,
          'Tab': function (editor) {
            if (editor.somethingSelected()) editor.indentSelection('add');
            else editor.replaceSelection('    ', 'end', '+input');
          },
          'Shift-Tab': function (editor) { editor.indentSelection('subtract'); }
        }
      });
      instance.cm = cm;
      instance.change = () => notify(instance);
      cm.on('change', instance.change);
      cm.getWrapperElement().classList.add('java-code-editor');
      cm.getInputField().setAttribute('aria-label', textarea.getAttribute('aria-label') || 'محرر Java');
      // Keep the original textarea synchronized for run/copy/export consumers.
      cm.save();
    }

    // Also accept deliberate external textarea input events. Normal callers
    // should use setValue(), which updates the visible editor immediately.
    instance.input = () => {
      if (instance !== current) return;
      if (instance.cm && instance.cm.getValue() !== textarea.value) {
        instance.cm.setValue(textarea.value);
      } else notify(instance);
    };
    textarea.addEventListener('input', instance.input);
    if (!instance.cm) {
      instance.keydown = event => {
        if (event.key === 'Escape') { event.preventDefault(); escape(); }
        if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
          event.preventDefault(); run();
        }
      };
      textarea.addEventListener('keydown', instance.keydown);
    }
    return {
      getValue: () => instance.cm ? instance.cm.getValue() : textarea.value,
      setValue: value => { if (current === instance) setValue(value); },
      refresh: () => { if (current === instance) refresh(); },
      destroy: () => { if (current === instance) destroy(); }
    };
  }

  function getValue() {
    if (!current) return '';
    return current.cm ? current.cm.getValue() : current.textarea.value;
  }

  function setValue(value) {
    if (!current) return;
    const text = String(value == null ? '' : value);
    if (current.cm && current.cm.getValue() !== text) current.cm.setValue(text);
    else {
      current.textarea.value = text;
      notify(current);
    }
  }

  function refresh() {
    if (current && current.cm) current.cm.refresh();
  }

  function destroy() {
    const previous = current;
    current = null;
    if (!previous) return;
    previous.textarea.removeEventListener('input', previous.input);
    if (previous.keydown) previous.textarea.removeEventListener('keydown', previous.keydown);
    if (previous.cm) {
      previous.cm.off('change', previous.change);
      previous.cm.toTextArea();
    }
  }

  function highlight(root = document) {
    if (!CM || !CM.runMode || !root) return;
    const selector = 'pre.language-java, pre[data-java], code.language-java, code[data-java]';
    const candidates = [];
    if (root.matches && root.matches(selector)) candidates.push(root);
    if (root.querySelectorAll) candidates.push(...root.querySelectorAll(selector));
    const targets = new Set();
    candidates.forEach(node => {
      // Never color generated editor rows, program output, or UML text, even
      // if a caller accidentally marks one of those regions as Java.
      if (node.closest('.CodeMirror, .console-wrap, .output-preview, .uml-class, [data-no-highlight]') || node.id === 'console') return;
      const pre = node.tagName === 'PRE' ? node : node.closest('pre');
      if (pre) targets.add(pre);
    });
    targets.forEach(pre => {
      const target = pre.querySelector('code') || pre;
      const source = target.textContent;
      if (highlighted.get(target) === source) return;
      const fragment = document.createDocumentFragment();
      // The callback form preserves literal tabs and newlines when copied.
      // The stock DOM form of runMode expands tabs into spaces.
      CM.runMode(source, MODE, (text, style) => {
        if (style) {
          const span = document.createElement('span');
          span.className = style.split(/\s+/).map(token => 'cm-' + token).join(' ');
          span.textContent = text;
          fragment.appendChild(span);
        } else fragment.appendChild(document.createTextNode(text));
      });
      target.replaceChildren(fragment);
      pre.classList.add('cm-s-' + THEME, 'java-highlighted');
      highlighted.set(target, source);
    });
  }

  window.JavaEditor = { mount, getValue, setValue, refresh, destroy, highlight };
})();
