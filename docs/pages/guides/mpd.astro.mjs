import { c as createComponent, b as createAstro, d as addAttribute, e as renderHead, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_C9uky6g5.mjs';
import 'kleur/colors';
/* empty css                                                 */
import { $ as $$Header, a as $$Aside } from '../../chunks/Header_DrBGRuRM.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Mpd = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Mpd;
  return renderTemplate`<html> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Lambda - guides/mpd</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main class="post-main"> ${renderComponent($$result, "Aside", $$Aside, {})} <span class="post-title">mpd guide</span> <p>Music Player Daemon ou simplesmente mpd é a melhor forma de você ouvir música. minimalista, simples, customizável.</p> <p>como está em seu nome o mpd opera como um daemon, ele rodará no 'backend', você precisa de clientes para se conectar nele, esses é um de seus principais beneficios, você pode usar qualquer cliente que quiser.</p> <p>não vou entrar muito nos detalhes sobre o que ele é, mas sim sobre como usá-lo. pode saber mais sobre em <a href="https://musicpd.org" target="_blank">musicpd</a>.</p> <h3>instalação</h3> <p>ele está disponível no android, windows e linux. aqui prefiro focar no linux, até porquê nunca o usei no windows.</p> <p>você pode simplesmente instalar com o gerenciador de pacotes da sua distribuação. aqui alguns exemplos:</p> <p>se for baseada em arch: </p><pre><code>sudo pacman -S mpd mpc</code></pre> <p>se for void: </p><pre><code>sudo xbps-install -S mpd mpc</code></pre> <p>se for baseada em debian: </p><pre><code>sudo apt install mpd mpc</code></pre> <br> <p>note que também instalamos o mpc, que é basicamente o mais simples e básico cliente mpd.</p> <h3>configuração</h3> <p>agora precisamos configurar nosso mpd. seu arquivo de configuração fica em <code>XDG_CONFIG_HOME/mpd/mpd.conf</code> que é o mesmo que <code>~/.config/mpd/mpd.conf</code>.</p> <p>veja essa básica configuração e vamos por partes:</p> <pre><code>
 music_directory     "/home/seu_usuario/Musicas"
 
 playlist_directory "/home/seu_usuario/Musicas/playlists"
 
 db_file "/home/seu_usuario/.config/mpd/database"
 auto_update	"yes"
 
 audio_output &#123
    type   "fifo"
    name   "my_fifo"
    path   "/tmp/mpd.fifo"
    format "44100:16:2"
 &#125
 
 audio_output &#123
     type	"pulse"
     name	"My pulse Output"
 &#125</code></pre> <p></p> <p>apesar dele ser bem auto explicativo e simples, vamos destrincha-lo.</p> <p>music_directory é simplesmente a pasta onde suas músics estão, mesmo que eles estejam em subpastas.</p> <p>playlist_directory são suas playlists, pessoalmente nunca usei.</p> <p>o restante você até pode querer alterar, mas não é realmente necessário, o lugar onde fica seu banco de dados, seu output são coisas meio padrão.</p> <h3>uso</h3> <p>há algumas diferentes formas de você usar o mpd. você pode roda-lo ligando ele como serviço, ou simplesmente colocando em algum tipo de autostart.</p> <p>para habilita-lo como serviço: <br><br><code>sudo systemctl enable --now mpd</code></p> <p>após isso basta você abrir alguém cliente mpd e o mpd fará todo o resto por ti, organização, artistas, albuns e etc.</p> <p>eu pessoalmente uso o <a href="https://mierak.github.io/rmpc" target="_blank">rmpc</a></p> <p>pode encontrar mais clients em <a href="https://www.musicpd.org/clients/">musicpd</a> ou na <a href="https://wiki.archlinux.org/title/Music_Player_Daemon#Clients">archwiki</a>.</p> </main> </body></html>`;
}, "/home/edu/proj/www/src/pages/guides/mpd.astro", void 0);

const $$file = "/home/edu/proj/www/src/pages/guides/mpd.astro";
const $$url = "/www/guides/mpd";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Mpd,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
