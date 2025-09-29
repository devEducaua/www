import { c as createComponent, r as renderComponent, m as maybeRenderHead, a as renderTemplate } from '../chunks/astro/server_C9uky6g5.mjs';
import 'kleur/colors';
/* empty css                                              */
import { $ as $$Header, a as $$Aside } from '../chunks/Header_DrBGRuRM.mjs';
import { $ as $$Head } from '../chunks/Head_CzVFYE3-.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$Now = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html data-astro-cid-lfnvi74r> ${renderComponent($$result, "Head", $$Head, { "customTitle": "lambda - now", "data-astro-cid-lfnvi74r": true })}${maybeRenderHead()}<body data-astro-cid-lfnvi74r>  ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-lfnvi74r": true })} <main data-astro-cid-lfnvi74r> ${renderComponent($$result, "Aside", $$Aside, { "data-astro-cid-lfnvi74r": true })} <div id="post-box" class="box" data-astro-cid-lfnvi74r> <span class="box-title" data-astro-cid-lfnvi74r>now</span> <p data-astro-cid-lfnvi74r>eu estou a todo momento fazendo algo diferente, nunca parado.</p> <p data-astro-cid-lfnvi74r>aqui quero por essas coisas que faço.</p> <br data-astro-cid-lfnvi74r> <p data-astro-cid-lfnvi74r>lendo:</p> <ul data-astro-cid-lfnvi74r> <li data-astro-cid-lfnvi74r><b data-astro-cid-lfnvi74r>O Estranho Misterioso</b> de Mark Twain</li> <li data-astro-cid-lfnvi74r><b data-astro-cid-lfnvi74r>Yu Yu Hakusho</b> de Togashi, Yoshihiro</li> <li data-astro-cid-lfnvi74r><b data-astro-cid-lfnvi74r>Hellsing</b> de Hirano, Kouta</li> </ul> <br data-astro-cid-lfnvi74r> <p data-astro-cid-lfnvi74r>jogando:</p> <ul data-astro-cid-lfnvi74r> <li data-astro-cid-lfnvi74r><b data-astro-cid-lfnvi74r>Super Mario Kart</b> - SNES</li> </ul> <br data-astro-cid-lfnvi74r> <p data-astro-cid-lfnvi74r>aprendendo:</p> <ul data-astro-cid-lfnvi74r> <li data-astro-cid-lfnvi74r>escrita: <a href="https://rmarkdown.rstudio.com/" target="_blank" data-astro-cid-lfnvi74r>R Markdown</a>, <a href="https://www.latex-project.org/" target="_blank" data-astro-cid-lfnvi74r>LaTeX</a>.</li> <li data-astro-cid-lfnvi74r>programação: websockets, c, deno e muito mais.</li> <li data-astro-cid-lfnvi74r>protocolos: <a href="geminiprotocol.net" target="_blank" data-astro-cid-lfnvi74r>Gemini</a> e <a href="https://en.wikipedia.org/wiki/Gopher_(protocol)#External_links" target="_blank" data-astro-cid-lfnvi74r>Gopher</a>.</li> <li data-astro-cid-lfnvi74r>outros: LFS, xadrez.</li> </ul> <br data-astro-cid-lfnvi74r> <p data-astro-cid-lfnvi74r>este é meu atual setup:</p> <ul data-astro-cid-lfnvi74r> <li data-astro-cid-lfnvi74r>distro: arch</li> <li data-astro-cid-lfnvi74r>wm: bspwm</li> <li data-astro-cid-lfnvi74r>compositor: xcompmgr</li> <li data-astro-cid-lfnvi74r>terminal: ghostty</li> <li data-astro-cid-lfnvi74r>code: nvim</li> <li data-astro-cid-lfnvi74r>multiplexer: tmux</li> </ul> </div> </main> </body></html>`;
}, "/home/edu/proj/www/src/pages/now.astro", void 0);

const $$file = "/home/edu/proj/www/src/pages/now.astro";
const $$url = "/www/now";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Now,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
