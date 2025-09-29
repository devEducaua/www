import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from './astro/server_C9uky6g5.mjs';
import 'kleur/colors';
import { $ as $$PostLayout } from './postLayout_DsZjC8ka.mjs';

const html = () => "<p>eu passei um certo periodo recentemente sem internet, nada fora do normal, isso é até frequente. mas me surpreendeu eu sofrer de algo que não sofria a tempos, ansiedade por não fazer nada. ficava a todo momento pensando em como eu queria fazer algo, aprender algo novo, conversar com pessoas, fazer coisas produtivas. o sentimento de que eu teria de ficar com o “conhecimento estagnado” por muito tempo me assombrava. eu queria estudar LaTeX, mas não podia. queria fazer alguns projetos para estudar web backend, mas não podia. e isso foi me atormetando.</p>\n<p>fico sem internet basicamente todo mês por várias dias. passar o dia apenas lendo e pensando já estava até natural. não senti nenhuma fonte de qualquer rede social, não queria <em>scrollar</em> o reddit, assistir coisas no youtube ou filmes. eu só queria aprender algo, eu até tenho centenas de gigas de mídia localmente aqui, de filmes, séries até músicas. porém não senti vontade de ver. pensando sobre isso percebi que o problema era a falta de documentação e conteudo offline que eu tinha disponível. obviamente que no UNIX nós temos as <em>MAN PAGES</em>, mas elas não se preocupam muito com quem realmente está começando a aprender.</p>\n<p>linguagens de programação, utilitários de cli, bibliotecas e muitas outras coisas que você espera poder ter essa documentação local, várias vezes não havia nada. me lembro perfeitamente de estar fazendo uma aplicação backend, onde eu precisaria de <strong>JWT</strong>, para coisas como integração com banco de dados e web servers eu simplesmente colei de outras <em>node_modules</em>, porém em nenhum outro projeto meu havia a lib <strong>JWT</strong> necessária.</p>\n<p>graças a isso, estou agora baixando documentação offline de qualquer coisa que eu queira aprender. seja coisas como xadrez até bancos de dados, linguagens. livros inteiros sobre LaTeX. baixando tutoriais e guias sejam video ou texto também. e sinceramente é simplesmente melhor consumir tudo isso offline. as distrações da atual web são terríveis, e isso é provado todo dia.</p>\n<p>no fim tudo que eu precisava era de <a href=\"https://en.wikipedia.org/wiki/RTFM\">RTFM</a>.</p>";

				const frontmatter = {"layout":"../../layouts/postLayout.astro","title":"documentação offline","date":"07/09/2025"};
				const file = "/home/edu/proj/www/src/pages/posts/documentacao-offline.md";
				const url = "/www/posts/documentacao-offline";
				function rawContent() {
					return "   \n                                      \n                             \n                \n   \n\neu passei um certo periodo recentemente sem internet, nada fora do normal, isso é até frequente. mas me surpreendeu eu sofrer de algo que não sofria a tempos, ansiedade por não fazer nada. ficava a todo momento pensando em como eu queria fazer algo, aprender algo novo, conversar com pessoas, fazer coisas produtivas. o sentimento de que eu teria de ficar com o \"conhecimento estagnado\" por muito tempo me assombrava. eu queria estudar LaTeX, mas não podia. queria fazer alguns projetos para estudar web backend, mas não podia. e isso foi me atormetando.\n\nfico sem internet basicamente todo mês por várias dias. passar o dia apenas lendo e pensando já estava até natural. não senti nenhuma fonte de qualquer rede social, não queria _scrollar_ o reddit, assistir coisas no youtube ou filmes. eu só queria aprender algo, eu até tenho centenas de gigas de mídia localmente aqui, de filmes, séries até músicas. porém não senti vontade de ver. pensando sobre isso percebi que o problema era a falta de documentação e conteudo offline que eu tinha disponível. obviamente que no UNIX nós temos as _MAN PAGES_, mas elas não se preocupam muito com quem realmente está começando a aprender.\n\nlinguagens de programação, utilitários de cli, bibliotecas e muitas outras coisas que você espera poder ter essa documentação local, várias vezes não havia nada. me lembro perfeitamente de estar fazendo uma aplicação backend, onde eu precisaria de **JWT**, para coisas como integração com banco de dados e web servers eu simplesmente colei de outras _node_modules_, porém em nenhum outro projeto meu havia a lib **JWT** necessária. \n\ngraças a isso, estou agora baixando documentação offline de qualquer coisa que eu queira aprender. seja coisas como xadrez até bancos de dados, linguagens. livros inteiros sobre LaTeX. baixando tutoriais e guias sejam video ou texto também. e sinceramente é simplesmente melhor consumir tudo isso offline. as distrações da atual web são terríveis, e isso é provado todo dia.\n\nno fim tudo que eu precisava era de [RTFM](https://en.wikipedia.org/wiki/RTFM).\n";
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

const __vite_glob_0_2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_0_2 as _ };
