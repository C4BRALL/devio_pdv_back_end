<p align="center">
  <img src="https://github.com/deviobr/code-patterns/blob/main/images/devio.webp?raw=true" />
</p>

<h1 align="center">PDV – Fast Food / Full Stack</h1>

## Descrição 👾

Um restaurante precisa poder registrar suas vendas de forma fácil e rápida, este trabalha com preparo de comidas rápidas e o método atual por comanda deixa o processo como um todo mais lento. O restaurante gostaria de ter um ambiente intuitivo listando os produtos mais vendidos e possibilitando a fácil inserção desses no checkout, ele também gostaria de um visual simples, porém moderno.

### Requisitos ✅

- As linguagens utilizadas deverão ser PHP e/ou JS.
- O back-end deverá ser separado do front-end.
- Deverá ser desenvolvido utilizando as versões mais recentes.
- Utilizar dos [Padrões Devio](https://github.com/deviobr/code-patterns).
- Seguir o [Protótipo](https://xd.adobe.com/view/426c6e77-3eac-40e9-8262-41ef5a325fce-173f/?fullscreen).
- Ser responsivo.

### Histórias de Usuário 🧑‍🍳

- O usuário poderá ver uma pequena quantidade de produtos na tela para seleção rápida.
- O usuário terá a opção de digitar o nome ou código para encontrar o produto.
- O usuário irá poder adicionar/remover itens e acompanhar o resumo do pedido.
- O usuário poderá ver o total e o troco.
- Deverá poder incluir o nome do cliente para ser entregue o pedido.
- Ao finalizar o pedido este deverá ser impresso em uma via para o cliente (impressora térmica), liberando a tela para o próximo pedido.
  - Obs: A solução é muito mais simples do que se parece.
- O pedido deverá aparecer para a cozinha junto ao nome do cliente.
- A cozinha poderá dar baixa nos pedidos concluídos.

### Histórias Bônus (opcionais) 💘

- Os pedidos devem aparecer para a cozinha em tempo real.
  - Obs: Utilização de Long Pooling ou WebSockets facilitam a solução.
- O usuário poderá incluir uma observação a cozinha.
- O usuário poderá atribuir múltiplas formas de pagamento na finalização do pedido.
- Os pedidos baixados devem aparecer em uma tela com o nome do cliente, apitando para ser feito a retirada.

### Observações 👀

- Não há a necessidade de fazer telas de cadastro, os registros poderão ser vir de uma base fixa.
- Os itens bônus não são obrigatórios, porém se feitos serão bastante relevantes e mostraram o empenho do candidato junto a vaga/empresa.
- Será levado em consideração conceitos diversos, porém o mínimo que se espera aplicação de conceitos de qualidade e manutenção de código.
- Use a criatividade, não tenha medo, isso será um fator crucial na análise.

### Próximos passos 🚀

1. Disponibilizar código em um repositório no GitHub com um README explicando o desafio.
1. Enviar o link do repositório para: talentos@devio.com.br
1. Fazer o deploy e disponibilizar link para acesso online
1. Entraremos em contato para informar o resultado, no caso de recusa, informaremos os motivos

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
