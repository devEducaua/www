import { c as createComponent, r as renderComponent, m as maybeRenderHead, a as renderTemplate } from '../chunks/astro/server_C9uky6g5.mjs';
import 'kleur/colors';
import { $ as $$Header, a as $$Aside } from '../chunks/Header_DrBGRuRM.mjs';
import { $ as $$Head } from '../chunks/Head_CzVFYE3-.mjs';
/* empty css                                              */
export { renderers } from '../renderers.mjs';

const $$Guides = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html> ${renderComponent($$result, "Head", $$Head, { "customTitle": "lambda - guides" })}${maybeRenderHead()}<body> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderComponent($$result, "Aside", $$Aside, {})} <div id="posts-box" class="box"> <span class="box-title">teaching</span> <p>uma das coisas que eu mais gosto de fazer é ensinar, aqui gostaria de ensinar algumas coisas, focando principalmente em coisas mais introdutórias.</p> <br> <ul> <li><a href="./guides/mpd">Mpd</a> um simples guia para começar a user o music player daemon.</li> </ul> </div> </main> </body></html>`;
}, "/home/edu/proj/www/src/pages/guides.astro", void 0);

const $$file = "/home/edu/proj/www/src/pages/guides.astro";
const $$url = "/www/guides";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Guides,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
