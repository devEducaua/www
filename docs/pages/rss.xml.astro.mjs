import rss, { pagesGlobToRssItems } from '@astrojs/rss';
export { renderers } from '../renderers.mjs';

async function GET(context) {
  return rss({
    title: "lambda blog",
    description: "some things",
    site: "https://deveducaua.github.io/www",
    items: await pagesGlobToRssItems(/* #__PURE__ */ Object.assign({"./posts/baixe-suas-musicas.md": () => import('../chunks/baixe-suas-musicas_DJcDBYaH.mjs').then(n => n._),"./posts/dependencia-as-big-techs.md": () => import('../chunks/dependencia-as-big-techs_QhIfF1QX.mjs').then(n => n._),"./posts/documentacao-offline.md": () => import('../chunks/documentacao-offline_S4Tcy56O.mjs').then(n => n._),"./posts/nom-rss-reader.md": () => import('../chunks/nom-rss-reader_DXHfsCTb.mjs').then(n => n._)})),
    customData: `<language>pt-br</language>`,
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
