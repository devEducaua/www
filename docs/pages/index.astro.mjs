import { c as createComponent, r as renderComponent, m as maybeRenderHead, a as renderTemplate } from '../chunks/astro/server_C9uky6g5.mjs';
import 'kleur/colors';
import { $ as $$Header, a as $$Aside } from '../chunks/Header_DrBGRuRM.mjs';
import { $ as $$Head } from '../chunks/Head_CzVFYE3-.mjs';
/* empty css                                              */
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html data-astro-cid-j7pv25f6> ${renderComponent($$result, "Head", $$Head, { "data-astro-cid-j7pv25f6": true })}${maybeRenderHead()}<body data-astro-cid-j7pv25f6>  ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-j7pv25f6": true })} <main data-astro-cid-j7pv25f6> ${renderComponent($$result, "Aside", $$Aside, { "data-astro-cid-j7pv25f6": true })} <div id="main-box" class="box" data-astro-cid-j7pv25f6> <span class="box-title" data-astro-cid-j7pv25f6>main</span> <p data-astro-cid-j7pv25f6>este aqui é o meu site pessoal.</p> <br data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>aqui quero fazer alguns posts, colocar links uteis, ensinar coisas e por aí vai.</p> <br data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>eu gosto muito de aprender e criar coisas. Muito disso vêm das filosofias <a href="https://wikipedia.org/wiki/KISS_principle" target="_blank" data-astro-cid-j7pv25f6>KISS</a> & <a href="https://wikipedia.org/wiki/Do_it_yourself" target="_blank" data-astro-cid-j7pv25f6>DIY</a>.</p><br data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>estudo constantemente ciência da computação, linguística, filosofia, e entre muitos outras coisas também.</p> <br data-astro-cid-j7pv25f6> </div> </main> </body></html>`;
}, "/home/edu/proj/www/src/pages/index.astro", void 0);

const $$file = "/home/edu/proj/www/src/pages/index.astro";
const $$url = "/www";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
