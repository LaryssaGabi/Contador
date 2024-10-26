# Contador

O projeto é uma aplicação simples de contador desenvolvida com **React** e **Styled Components**. A aplicação permite ao usuário incrementar, decrementar e zerar um contador, apresentando uma interface amigável.

## Estrutura do Projeto

1. **Componentes**:
   - **App**: Componente principal que renderiza o componente `Contador`.
   - **Contador**: Componente que gerencia o estado do contador e possui as funções para incrementar, decrementar e zerar o contador.

2. **Estilização**:
   - Utiliza **Styled Components** para estilizar os componentes de forma modular e reutilizável.

## Funcionalidades

- **Incrementar o Contador**: Um botão que, ao ser clicado, aumenta o valor do contador em 1.
- **Decrementar o Contador**: Um botão que diminui o valor do contador em 1.
- **Zerar o Contador**: Um botão que redefine o contador para 0.
- **Exibição do Contador**: O valor atual do contador é exibido na tela, permitindo que o usuário veja as mudanças em tempo real.

## Ferramentas e Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **Styled Components**: Biblioteca para estilização de componentes em React usando CSS-in-JS.
- **Vite**: Ferramenta de build para desenvolvimento rápido de aplicações web, proporcionando um ambiente de desenvolvimento otimizado.
- **ESLint**: Ferramenta de linting para identificar e corrigir problemas no código, garantindo a qualidade e a padronização do código.

## Dependências

### Dependências do projeto

```json
"dependencies": {
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "styled-components": "^6.1.8"
}
