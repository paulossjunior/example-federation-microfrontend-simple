# Micro Front-End usando Vue
Esse tutorial apresenta um exemplo de como desenvolver uma aplicação com arquitetura de Micro Front-End.

## Tecnologias
* Vue
* Vue Federation
* Ngnix


## Arquitetura
A Arquitetura é composta pelos seguintes modulos:

* **Auth-mfe**: modulo responsavel pela autenticação
* **design-system**: modulo responsavel por ter os componentes visuais da aplicação
* **product-mfe**: modulo que manipula dados sobre produto
* **sales-mfe**: modulo que manipula dados de venda

## Uso

Para roda a aplicação digite: 
```
docker-compose up --build
```

## Branches

* **Main**: exemplo simples de micro front-end
* **mvc**: exemplo aplicando o padrão MVC nos módulos.
* **crud-component**: exemplo aplicando componentes de CRUD junto com padrão MVC nos módulos. Neste exemplo, o design-system foi transformado em uma [lib](https://www.npmjs.com/package/design-system-paulossjunior) e essa lib foi reusada em outros projetos.