import { c as createComponent, b as createAstro, d as addAttribute, e as renderHead, a as renderTemplate } from './astro/server_C9uky6g5.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Head = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Head;
  let { customTitle } = Astro2.props;
  if (!customTitle) customTitle = "lambda";
  return renderTemplate`<head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/img/lambda.png"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${customTitle}</title><base href="https://deveducaua.github.io/www/">${renderHead()}</head>`;
}, "/home/edu/proj/www/src/components/Head.astro", void 0);

export { $$Head as $ };
