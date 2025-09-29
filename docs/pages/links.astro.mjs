import { c as createComponent, r as renderComponent, m as maybeRenderHead, a as renderTemplate } from '../chunks/astro/server_C9uky6g5.mjs';
import 'kleur/colors';
import { $ as $$Header, a as $$Aside } from '../chunks/Header_DrBGRuRM.mjs';
import { $ as $$Head } from '../chunks/Head_CzVFYE3-.mjs';
/* empty css                                              */
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Links = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html data-astro-cid-au7rboj5> ${renderComponent($$result, "Head", $$Head, { "customTitle": "lambda - links", "data-astro-cid-au7rboj5": true })}${maybeRenderHead()}<body data-astro-cid-au7rboj5>  ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-au7rboj5": true })} <main data-astro-cid-au7rboj5> ${renderComponent($$result, "Aside", $$Aside, { "data-astro-cid-au7rboj5": true })} <div id="post-box" class="box" data-astro-cid-au7rboj5> <span class="box-title" data-astro-cid-au7rboj5>links</span> <p data-astro-cid-au7rboj5>aqui estão alguns do meus links: </p> <br data-astro-cid-au7rboj5> <ul data-astro-cid-au7rboj5> <p data-astro-cid-au7rboj5>code:</p> <li data-astro-cid-au7rboj5> <span data-astro-cid-au7rboj5>Github:</span> <a href="https://github.com/devEducaua" target="_blank" data-astro-cid-au7rboj5>link</a> </li> <li data-astro-cid-au7rboj5> <span data-astro-cid-au7rboj5>Codeberg:</span> <a href="https://codeberg.org/eduardocaua" target="_blank" data-astro-cid-au7rboj5>link</a> </li> <br data-astro-cid-au7rboj5> </ul> <ul data-astro-cid-au7rboj5> <p data-astro-cid-au7rboj5>media:</p> <li data-astro-cid-au7rboj5> <span data-astro-cid-au7rboj5>Letterboxd:</span> <a href="https://letterboxd.com/induardo" target="_blank" data-astro-cid-au7rboj5>link</a> </li> <li data-astro-cid-au7rboj5> <span data-astro-cid-au7rboj5>LastFM:</span> <a href="https://last.fm/user/chokito4" target="_blank" data-astro-cid-au7rboj5>link</a> </li> <li data-astro-cid-au7rboj5> <span data-astro-cid-au7rboj5>Myanimelist:</span> <a href="https://myanimelist.net/profile/chokito4" target="_blank" data-astro-cid-au7rboj5>link</a> </li> </ul> </div> </main> </body></html>`;
}, "/home/edu/proj/www/src/pages/links.astro", void 0);

const $$file = "/home/edu/proj/www/src/pages/links.astro";
const $$url = "/www/links";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Links,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
