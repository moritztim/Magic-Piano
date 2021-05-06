// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "div#settings-panel.svelte-r56iil.svelte-r56iil{background:var(--background-color);height:100%;left:0;position:absolute;top:0;width:100%}div#settings-panel.svelte-r56iil div.svelte-r56iil{margin:1em 0}button.svelte-r56iil.svelte-r56iil{height:1.5em;width:1.5em;border-radius:1.5em;border:none;margin:0 0.5em}button.active.svelte-r56iil.svelte-r56iil{outline:1px solid var(--primary-accent);outline-offset:4px}button.cardinal.svelte-r56iil.svelte-r56iil{background:#8c1515}button.blue.svelte-r56iil.svelte-r56iil{background:steelblue}button.green.svelte-r56iil.svelte-r56iil{background:darkolivegreen}button.grey.svelte-r56iil.svelte-r56iil{background:darkslategrey}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}