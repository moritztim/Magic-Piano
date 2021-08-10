// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "#roll-viewer.svelte-11ybd8n.svelte-11ybd8n{position:relative;height:100%;width:100%}#roll-viewer.svelte-11ybd8n p.svelte-11ybd8n{background:rgba(0, 0, 0, 0.4);border-radius:4px;color:white;left:1em;padding:4px 8px;position:absolute;top:1em;z-index:1}#roll-viewer.svelte-11ybd8n.svelte-11ybd8n::before{background-color:var(--primary-accent-semiopaque);border:1px solid var(--primary-accent);content:\"\";display:block;height:var(--trackerbar-height);pointer-events:none;position:absolute;top:50%;width:100%;z-index:1}#roll-viewer.svelte-11ybd8n.svelte-11ybd8n::after{background:linear-gradient(var(--background-angle), var(--background-darker) 0%, var(--background-color) 25%, var(--background-color) 75%, var(--background-darker) 100%);background-attachment:fixed;background-position:center;bottom:0;content:\" \";left:0;mix-blend-mode:multiply;pointer-events:none;position:absolute;right:0;top:0}#roll-viewer.svelte-11ybd8n canvas{background:white !important}#roll-viewer.svelte-11ybd8n .openseadragon-canvas:focus{outline:none}#roll-viewer.svelte-11ybd8n .displayregion::after{content:attr(data-label);display:block;position:absolute;width:100%;font-size:16px;text-align:center;padding:8px 0;background:linear-gradient(180deg, transparent 0%, white 20%, white 80%, transparent 100%);top:calc(100% + 2px);transition:margin 1s ease}#roll-viewer.svelte-11ybd8n .displayregion.label-above::after{margin-top:-100%;top:0}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}