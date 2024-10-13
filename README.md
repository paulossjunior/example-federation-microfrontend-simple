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

### Main
 Exemplo simples de micro front-end. Cada módulo é um subpasta do projeto principal. Cada subpasta é um projeto Vue com um docker que compartilha recursos. Cada módulo roda em um porta especifica:

* **design-system**: 5001
* **Auth-mfe**: 5002
* **product-mfe**: 5003
* **sales-mfe**: 5004
* **main**: 5000

### MVC 
Neste exemplo, atualizamos o exemplo da branch Main, aplicando o padrão MVC no módulo Produto e Vendas

### Crud-component

Neste exemplo, atualizamos o exemplo da Branch MVC da seguinte forma: 
* **Design-System se transformou em uma lib**:  o design-system foi transformado em uma [lib](https://www.npmjs.com/package/design-system-paulossjunior), assim melhorando o reuso em outras aplicações
* **Criação de componentes padrões de CRUD+L para as entidades**: foram desenvolvidos componenets de CRUD+L (e.g., Formulários, paginação) genericos. Assim, os modulos de Produtos e Vendas reusam esses componentes. 
* **Reuso de Componentes**: Agora os Módulos Produto e Vendas reusam os componentes de CRUD+L da lib **Design-System**

### Reverse Proxy

Neste exemplo, atualizamos a configuração do Nginx da aplicação main para trabalhar com o padrão de reverse proxy. Assim, a aplciação não precisa saber em qual porta os módulos estão rodando. Segue as mundaças:

1 **Configuração do Nginx para a main-app (nginx.conf):**
```bash
 server {
    listen 80;

    # Regras para o micro front-end de autenticação (auth-mfe)
    location /auth/ {
        proxy_pass http://auth-mfe/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Regras para o micro front-end de produtos (product-mfe)
    location /products/ {
        proxy_pass http://product-mfe/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Regras para o micro front-end de vendas (sales-mfe)
    location /sales/ {
        proxy_pass http://sales-mfe/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

```
2 **Atualização do vite.config.js do main-app:**

```js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'mainApp',
      remotes: {
        // Apontando para os caminhos configurados no Nginx
        authMFE: 'http://localhost:5000/auth/assets/remoteEntry.js',
        productMFE: 'http://localhost:5000/products/assets/remoteEntry.js',
        salesMFE: 'http://localhost:5000/sales/assets/remoteEntry.js',
      },
      shared: ['vue'],
    }),
  ],
  server: {
    port: 5000,
    cors: {
      origin: '*', // Permite que qualquer origem acesse o recurso
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      credentials: true,
    },
    headers: {
      'Access-Control-Allow-Origin':  '*', // Permite requisições de qualquer origem
    },
  },
  build: {
    target: 'esnext'
  },
});

```