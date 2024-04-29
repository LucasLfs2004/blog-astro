---
layout: ../../layouts/MarkdownPostLayout.astro
title: Atualizando um app legado
author: Lucas Ferreira Silva
description: "Após algumas manutenções, fui encarregado de realizar uma atualização geral de um aplicativo legado."
image:
    url: "/assets/react-native.png"
    alt: "Miniatura de arcos do Astro."
pubDate: 2024-04-29
tags: ["astro", "blogueirando", "aprendendo em público", "sucessos", "Estágio"]
---

Quando entrei no estágio, me deram a tarefa inicial de estudar React e React Native. Iniciei meus estudos com o React Js, e após algum tempo, tive minha primeira tarefa, com uma aplicação que era tratada como um bicho papão dentro da empresa, onde ninguém queria mexer no código e muito menos dar manutenção. Com a má fama desse projeto, tive receio e medo de não conseguir fazer nada certo, mas consegui concluir.

<div style="display: flex; column-gap: 24px; align-items: flex-start">
    <div style="max-width: 40%; max-height: 300px; object-fit: cover">
        <img style="width: 450px; height: 240px; object-fit: cover" src="/assets/posts/android14.jpeg" alt="android14" />
    </div>
    <p>
        Conforme foi passando o tempo, cada vez mais tive tarefas de manutenção dentro desse app, no qual fui cada vez mais compreendendo o funcionamento e a estrutura do projeto. Passado quase um ano realizando as tarefas desse projeto, chegou uma nova demanda para a parte android desse aplicativo, ao qual era feito em React Native, após resolver o problema e tentar testar em um dispositivio com android 14, o mais recente até o momento, notei que o aplicativo não abria nessa versão de Android.
        <br>
        <br>
        Após uma série de pesquisas descobri que a versão do React Native utilizada no projeto não funcionaria no android 14. Reuni todas as informações e apresentei para o meu Gerente de Projetos, e como o Dev Sênior estava de férias, me disponibilizei para tentar realizar toda essa atualização do App, inicialmente para o Android.
    </p>
</div>

Comecei o app atualizando as principais dependências do app, utilizando a ferramenta <a href="https://react-native-community.github.io/upgrade-helper/" >React Native Upgrade Helper</a>, que pode ser muito útil quando se precisa atualizar uma aplicação React Native antiga. Logo após realizar todas as atualizações das principais dependências, consegui rodar o app em dispositivos com android 14, entretante, tive outros problemas com bibliotecas externas, entre as principais, o react-native-router-flux, que foi descontinuado.

Com isso, precisei refazer todo o sistema de rotas do app, o que me ajudou a poder ir acrecentando uma tela de cada vez ao app. Com isso, eu pude ter noção do que cada componente e screen necessitava de correções, dependências que precisavam ser atualizadas ou substituídas, entre outros. Após refazer quase todas as páginas, tive que reconstruir a ferramenta do player dentro do app, que também foi uma tarefa importante e trabalhosa dentro de todo esse processo de atualização.

Ao decorrer de todo o processo e todas as dificuldades, consegui aprender e compreender coisas que antigamente nunca havia utilizado, mesmo sendo um estagiário, fui capaz de atualizar um dos aplicativos mais complexos da empresa onde trabalho, e ainda deixei o app considerávelmente mais fácil de rodar e compreender sua estrutura.



