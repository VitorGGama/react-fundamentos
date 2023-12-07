# Fundamentos de React

## 11-navegacao-usando-rotas

O React suporta a navegação /links como Single Page Application
(SPA) usando uma biblioteca adicional chamada **react router DOM**.

Portanto, é necessário instalar esta dependencia:

`npm install react-router-dom`

## 09-gerenciamento-de-estados-dos-componentes

`Estado` ou `State` é uma propriedade especial de um componente
que pode ser alterada ao longo do tempo. POr exemplo, um componente
que exibe um contador de **likes** precisa de um gerenciamento de
`States` para controlar a quantidade de **likes** recebidos.

O uso de `states` permite ao React reagir ás mudanças de renderização
dos componentes.

### Exemplos de mudanças que podem ser gerenciados por states

-Captura de dados de formulario
-Visibilidade de componentes
-Filtros e buscas de dados
-Contadores
-Temas/estilos
-Pontuação/vida de um jogador num jogo

---

## 06-props

São parâmetros/argumentos com valores/expressões passados para os
componentes React, normalmente usados para injeção de dados dinâmicos.
As `props` funcionam como objetos, e para cada `prop` criada por você
passar a ter propriedades deste objeto.

As `props` são chamadas manualmente, embora também exista uma `prop`
especial chamada `children` que permite ler/transmitir o conteúdo que
fica entre as tags de abertura/fechamento de um componente.

## Resumo/Revisão

JSX -> HTML + JS para criar componentes

- App.jsx (Componente PRINCIPAL)
- main.jsx (Inicialização do React)
- index.html (elemento raíz e chamada do script)

## 04-estilos

### - CSS in JS

- CSS inline: aplicado via atributo style da tag usando sintaxe
  JS, ou seja, objeto com propriedades.

  CSS externo e global usando arquivo.css e importando no main.jsx

CSS Module: arquivo CSS especial relacionado ao componente que desejamos estilizar. Normalmente, nomeia-se o arquivo como "NomeComponente.module.css". A vantagem de usar CSS Modules é criar um escopo de estilização evitando conflitos de classes com mesmo nome.

---

## 05-styled-components

## 00-projeto-resetado

### Informações gerais

A renderização ocorre na seguinte sequencia:

index.html <- main.jsx <- App.jsx

## npm run dev -- --host 0.0.0.0 --open

-> para abrir no navegador direto, através do cmd (prompt de comando).
