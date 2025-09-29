import { _ as __vite_glob_0_0 } from '../chunks/baixe-suas-musicas_DJcDBYaH.mjs';
import { _ as __vite_glob_0_1 } from '../chunks/dependencia-as-big-techs_QhIfF1QX.mjs';
import { _ as __vite_glob_0_2 } from '../chunks/documentacao-offline_S4Tcy56O.mjs';
import { _ as __vite_glob_0_3 } from '../chunks/nom-rss-reader_DXHfsCTb.mjs';
import { c as createComponent, r as renderComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from '../chunks/astro/server_C9uky6g5.mjs';
import 'kleur/colors';
/* empty css                                              */
import { $ as $$Header, a as $$Aside } from '../chunks/Header_DrBGRuRM.mjs';
import { $ as $$Head } from '../chunks/Head_CzVFYE3-.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Posts = createComponent(($$result, $$props, $$slots) => {
  const posts = Object.values([__vite_glob_0_0,__vite_glob_0_1,__vite_glob_0_2,__vite_glob_0_3]);
  return renderTemplate`<html data-astro-cid-at4y73ej> ${renderComponent($$result, "Head", $$Head, { "customTitle": "lambda - posts", "data-astro-cid-at4y73ej": true })}${maybeRenderHead()}<body data-astro-cid-at4y73ej>  ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-at4y73ej": true })} <main data-astro-cid-at4y73ej> ${renderComponent($$result, "Aside", $$Aside, { "data-astro-cid-at4y73ej": true })} <div id="posts-box" class="box" data-astro-cid-at4y73ej> <span class="box-title" data-astro-cid-at4y73ej>writing</span> <ul id="blog-list" data-astro-cid-at4y73ej> ${posts.map((post) => renderTemplate`<li data-astro-cid-at4y73ej> <span data-astro-cid-at4y73ej>${post.frontmatter.date}</span><a${addAttribute(post.url, "href")} data-astro-cid-at4y73ej>${post.frontmatter.title}</a> </li>`)} </ul> </div> </main> </body></html>`;
}, "/home/edu/proj/www/src/pages/posts.astro", void 0);

const $$file = "/home/edu/proj/www/src/pages/posts.astro";
const $$url = "/www/posts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Posts,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
