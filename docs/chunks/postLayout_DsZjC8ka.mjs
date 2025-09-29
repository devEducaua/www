import { c as createComponent, b as createAstro, r as renderComponent, m as maybeRenderHead, g as renderSlot, a as renderTemplate } from './astro/server_C9uky6g5.mjs';
import 'kleur/colors';
/* empty css                                      */
import { $ as $$Head } from './Head_CzVFYE3-.mjs';
import { $ as $$Header, a as $$Aside } from './Header_DrBGRuRM.mjs';

const $$Astro = createAstro();
const $$PostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`<html> ${renderComponent($$result, "Head", $$Head, { "customTitle": `Lambda - ${frontmatter.title}` })}${maybeRenderHead()}<body> ${renderComponent($$result, "Header", $$Header, {})} <main class="post-main"> ${renderComponent($$result, "Aside", $$Aside, {})} <span class="post-title">${frontmatter.title}</span> <p class="date">${frontmatter.date}</p> ${renderSlot($$result, $$slots["default"])} </main> <br> </body></html>`;
}, "/home/edu/proj/www/src/layouts/postLayout.astro", void 0);

export { $$PostLayout as $ };
