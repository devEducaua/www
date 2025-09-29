import { c as createComponent, m as maybeRenderHead, h as renderScript, a as renderTemplate } from './astro/server_C9uky6g5.mjs';
import 'kleur/colors';
import 'clsx';

const $$Aside = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<aside id="side"> <nav> <button><a href="./">main</a></button> <button><a href="./posts/">posts</a></button> <button><a href="./guides/">guides</a></button> <button><a href="./links/">links</a></button> <button><a href="./now/">now</a></button> <button><a href="./almanac/">almanac</a></button> <button id="theme-toggle">theme</button> <button><a href="https://github.com/devEducaua/www" target="_blank">source</a></button> </nav> </aside> ${renderScript($$result, "/home/edu/proj/www/src/components/Aside.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/edu/proj/www/src/components/Aside.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header> <h1 id="title"> <span id="lambda">󰘧</span> <a href="/index.html">lambda</a> </h1> </header>`;
}, "/home/edu/proj/www/src/components/Header.astro", void 0);

export { $$Header as $, $$Aside as a };
