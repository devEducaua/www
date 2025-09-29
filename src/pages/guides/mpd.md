---
layout: ../../layouts/guideLayout.astro
title: mpd
---

Music Player Daemon ou simplesmente mpd é a melhor forma de você ouvir música. minimalista, simples, customizável.
como está em seu nome o mpd opera como um daemon, ele rodará no 'backend', você precisa de clientes para se conectar nele, esses é um de seus principais beneficios, você pode usar qualquer cliente que quiser.
não vou entrar muito nos detalhes sobre o que ele é, mas sim sobre como usá-lo. pode saber mais sobre em [musicpd](https://musicpd.org).

### instalação
ele está disponível no android, windows e linux. aqui prefiro focar no linux, até porquê nunca o usei no windows.
você pode simplesmente instalar com o gerenciador de pacotes da sua distribuação. aqui alguns exemplos:

se for baseada em arch: ```sudo pacman -S mpd mpc```
se for void: ```sudo xbps-install -S mpd mpc```
se for baseada em debian: ```sudo apt install mpd mpc```
<br>

note que também instalamos o mpc, que é basicamente o mais simples e básico cliente mpd.</

### configuração
agora precisamos configurar nosso mpd. seu arquivo de configuração fica em ```XDG_CONFIG_HOME/mpd/mpd.conf``` que é o mesmo que ```~/.config/mpd/mpd.conf```.
veja essa básica configuração e vamos por partes:

```
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
 &#125
```


apesar dele ser bem auto explicativo e simples, vamos destrincha-lo.
music_directory é simplesmente a pasta onde suas músics estão, mesmo que eles estejam em subpastas.
playlist_directory são suas playlists, pessoalmente nunca usei.
o restante você até pode querer alterar, mas não é realmente necessário, o lugar onde fica seu banco de dados, seu output são coisas meio padrão.

### uso
há algumas diferentes formas de você usar o mpd. você pode roda-lo ligando ele como serviço, ou simplesmente colocando em algum tipo de autostart.
para habilita-lo como serviço: ```sudo systemctl enable --now mpd```

após isso basta você abrir alguém cliente mpd e o mpd fará todo o resto por ti, organização, artistas, albuns e etc.</

eu pessoalmente uso o [rmpc](https://mierak.github.io/rmpc).
pode encontrar mais clients em [musicpd](https://www.musicpd.org/clients/) ou na [archwiki](https://wiki.archlinux.org/title/Music_Player_Daemon#Clients).
