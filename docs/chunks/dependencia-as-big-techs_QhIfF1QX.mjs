import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from './astro/server_C9uky6g5.mjs';
import 'kleur/colors';
import { $ as $$PostLayout } from './postLayout_DsZjC8ka.mjs';

const html = () => "<p>com o recente caso onde o CEO do Github pediu demissão, e com isso a Microsoft rebaixou o Github de uma empresa separada para algo de dentro de sua <strong>CoreAI</strong>. Muitas Pessoas começaram a ficar preocupadas com o que seria do Github agora, pois a Microsoft tem um forte histórico de matar esses serviços que ela compra (<strong>xamarin</strong>, <strong>skype</strong> são os mais famosos). Todo o trabalho dessas pessoas está lá, e pode facilmente ser perdido apartir do momento que a Microsoft começar a fazer mudanças na plataforma. Então, é isso que acontece quando você depende de uma big tech.</p>\n<p>durante toda a minha vida vi diversas pessoas completamente dependente de certas big techs, principalmente da Google. Dependendo de seu calendário ao Google Agenda, ao Office ao Docs, ao Email ao Gmail, e por aí vai. <strong>PARE</strong>. Assim que qualquer coisa ocorrer na Google, assim que qualquer mudança nas diretrizes ocorrer, você estará amarrado a essa empresa.</p>\n<p>cheguei a presenciar isso acontecendo com uma grande empresa, o <strong>Notion</strong>. Há não muito tempo atrás o Notion trocou algumas políticas internas, que basicamente permitiam que ele fizessem o que quisessem com as suas notas, sem quaisquer privacidade. Vi muitas pessoas pararem de usar o serviço por isso, e muitos nem ao menos conseguirem, pois estavam absurdamente dependentes da plataforma.</p>\n<p>mesmo com o passar dos anos, as pessoas ainda não se preocupam com a privacidade e confiabilidade das empresas, mesmo que busquem muito isso na vida real, na hora do software parecem esquecerem. na internet privacidade e confiabilidade é absurdamente importante. não depende de grandes empresas, de pequenas se puder evitar também. dependa apenas de si mesmo, e não terá complicações inexperadas.</p>";

				const frontmatter = {"layout":"../../layouts/postLayout.astro","title":"dependencia as big techs","date":"15/08/2025"};
				const file = "/home/edu/proj/www/src/pages/posts/dependencia-as-big-techs.md";
				const url = "/www/posts/dependencia-as-big-techs";
				function rawContent() {
					return "   \n                                      \n                                 \n                \n   \n\ncom o recente caso onde o CEO do Github pediu demissão, e com isso a Microsoft rebaixou o Github de uma empresa separada para algo de dentro de sua **CoreAI**. Muitas Pessoas começaram a ficar preocupadas com o que seria do Github agora, pois a Microsoft tem um forte histórico de matar esses serviços que ela compra (**xamarin**, **skype** são os mais famosos). Todo o trabalho dessas pessoas está lá, e pode facilmente ser perdido apartir do momento que a Microsoft começar a fazer mudanças na plataforma. Então, é isso que acontece quando você depende de uma big tech.\n\ndurante toda a minha vida vi diversas pessoas completamente dependente de certas big techs, principalmente da Google. Dependendo de seu calendário ao Google Agenda, ao Office ao Docs, ao Email ao Gmail, e por aí vai. **PARE**. Assim que qualquer coisa ocorrer na Google, assim que qualquer mudança nas diretrizes ocorrer, você estará amarrado a essa empresa.\n\ncheguei a presenciar isso acontecendo com uma grande empresa, o **Notion**. Há não muito tempo atrás o Notion trocou algumas políticas internas, que basicamente permitiam que ele fizessem o que quisessem com as suas notas, sem quaisquer privacidade. Vi muitas pessoas pararem de usar o serviço por isso, e muitos nem ao menos conseguirem, pois estavam absurdamente dependentes da plataforma.\n\nmesmo com o passar dos anos, as pessoas ainda não se preocupam com a privacidade e confiabilidade das empresas, mesmo que busquem muito isso na vida real, na hora do software parecem esquecerem. na internet privacidade e confiabilidade é absurdamente importante. não depende de grandes empresas, de pequenas se puder evitar também. dependa apenas de si mesmo, e não terá complicações inexperadas.\n";
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

const __vite_glob_0_1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_0_1 as _ };
