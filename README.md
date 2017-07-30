# QuebraQuebra WebApp

Projeto do **Hackfest contra a Corrupção 2017: Tecnologia, Transparência e Cidadania**.

Acesse: [quebraquebra.lsd.ufcg.edu.br](http://quebraquebra.lsd.ufcg.edu.br)

## Links Externos

**API pública**: [api.quebraquebra.lsd.ufcg.edu.br](http://api.quebraquebra.lsd.ufcg.edu.br/)

**GitHub**: [github.com/quebraquebra](https://github.com/quebraquebra)

**Facebook**: [facebook.com/quebracamaraquebrasenado](https://www.facebook.com/quebracamaraquebrasenado)

## Para os Desenvolvedores

### Tecnologias Utilizadas

* JavaScript
  * [Angular 4](https://angular.io/)
  * [TypeScript 2](https://www.typescriptlang.org/)
  * [Node 8](https://nodejs.org/en/)
  * [NPM 5](https://www.npmjs.com/)
* HTML5
* CSS3
  * [Bootstrap 3](http://getbootstrap.com/)
  * [Sass](http://sass-lang.com/)

### Ambiente de Desenvolvimento

* Node;
* NPM.

### Desenvolvimento

1. Instale as dependências com o NPM.

```
npm install
```

2. Para execução do projeto, o **@angular/cli** conta com um servidor de desenvolvimento.

```
ng serve
```

> O servidor de desenvolvimento do **@angular/cli** roda em [http://localhost:4200](http://localhost:4200).

3. O *@angular/cli** também faz o *build* da aplicação.

```
ng build -prod
```

> A opção **-prod** é utilizada para *build* de produção. O resultado do processo é gerado no diretório **dist/**.

#### Outras configurações

Para o consumo dos serviços externos, configure as URLs dos recursos no arquivo **src/app/shared/service/url.service.ts**.
