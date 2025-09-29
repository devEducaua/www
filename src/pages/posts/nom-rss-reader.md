---
layout: ../../layouts/postLayout.astro
title: nom rss reader
date: 16/08/2025
---

[rss](wikipedia.org/wiki/rss) é uma tecnologia realmente prática e ótima, mas eu nunca me abtuei bem. muito disso se deve ao leitores rss, que não realmente são muito bons.

deixando de lado meus problemas com os leitores, vão falar sobre o [nom](https://github.com/guyfedwards/nom), um leitor de feeds rss no terminal.
ele é escrito em go, usando o [bubbletea](https://github.com/charmbracelet/bubbletea) para a [TUI](https://wikipedia.org/wiki/Text-based_user_interface), ele usa outro programa que acho fantástico e uso comumente, o [glow](https://github.com/charmbracelet/glow)
        
indo mais para o lado prático agora, vamos falar sobre como usar o nom.
para a instalação você pode simplesmente ir as [releases do github](https://github.com/guyfedwards/nom/releases)

agora, para adicionar os feeds, simplesmente rode: ```$ nom add https://blog.com/feed nomedoblog```
depois basta rodar `nom`, e receber suas noticias, e blog posts direto da linha de comando.
        
nom ainda tem mais alguns detalhes como keybindings especiais, e mais detalhes no seu arquivo de configuração, mas isso é de menos importância. para isso se pode simplesmente ler o README.md e a help page.
