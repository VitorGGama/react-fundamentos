# Fundamentos de React

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
