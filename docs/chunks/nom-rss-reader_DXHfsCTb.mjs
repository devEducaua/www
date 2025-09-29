import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from './astro/server_C9uky6g5.mjs';
import 'kleur/colors';
import { $ as $$PostLayout } from './postLayout_DsZjC8ka.mjs';

const html = () => "<p><a href=\"wikipedia.org/wiki/rss\">rss</a> é uma tecnologia realmente prática e ótima, mas eu nunca me abtuei bem. muito disso se deve ao leitores rss, que não realmente são muito bons.</p>\n<p>deixando de lado meus problemas com os leitores, vão falar sobre o <a href=\"https://github.com/guyfedwards/nom\">nom</a>, um leitor de feeds rss no terminal.\nele é escrito em go, usando o <a href=\"https://github.com/charmbracelet/bubbletea\">bubbletea</a> para a <a href=\"https://wikipedia.org/wiki/Text-based_user_interface\">TUI</a>, ele usa outro programa que acho fantástico e uso comumente, o <a href=\"https://github.com/charmbracelet/glow\">glow</a></p>\n<p>indo mais para o lado prático agora, vamos falar sobre como usar o nom.\npara a instalação você pode simplesmente ir as <a href=\"https://github.com/guyfedwards/nom/releases\">releases do github</a></p>\n<p>agora, para adicionar os feeds, simplesmente rode: <code>$ nom add https://blog.com/feed nomedoblog</code>\ndepois basta rodar <code>nom</code>, e receber suas noticias, e blog posts direto da linha de comando.</p>\n<p>nom ainda tem mais alguns detalhes como keybindings especiais, e mais detalhes no seu arquivo de configuração, mas isso é de menos importância. para isso se pode simplesmente ler o README.md e a help page.</p>";

				const frontmatter = {"layout":"../../layouts/postLayout.astro","title":"nom rss reader","date":"16/08/2025"};
				const file = "/home/edu/proj/www/src/pages/posts/nom-rss-reader.md";
				const url = "/www/posts/nom-rss-reader";
				function rawContent() {
					return "   \n                                      \n                     \n                \n   \n\n[rss](wikipedia.org/wiki/rss) é uma tecnologia realmente prática e ótima, mas eu nunca me abtuei bem. muito disso se deve ao leitores rss, que não realmente são muito bons.\n\ndeixando de lado meus problemas com os leitores, vão falar sobre o [nom](https://github.com/guyfedwards/nom), um leitor de feeds rss no terminal.\nele é escrito em go, usando o [bubbletea](https://github.com/charmbracelet/bubbletea) para a [TUI](https://wikipedia.org/wiki/Text-based_user_interface), ele usa outro programa que acho fantástico e uso comumente, o [glow](https://github.com/charmbracelet/glow)\n        \nindo mais para o lado prático agora, vamos falar sobre como usar o nom.\npara a instalação você pode simplesmente ir as [releases do github](https://github.com/guyfedwards/nom/releases)\n\nagora, para adicionar os feeds, simplesmente rode: ```$ nom add https://blog.com/feed nomedoblog```\ndepois basta rodar `nom`, e receber suas noticias, e blog posts direto da linha de comando.\n        \nnom ainda tem mais alguns detalhes como keybindings especiais, e mais detalhes no seu arquivo de configuração, mas isso é de menos importância. para isso se pode simplesmente ler o README.md e a help page.\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$PostLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const __vite_glob_0_3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { __vite_glob_0_3 as _ };
