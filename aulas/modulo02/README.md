<h1 align="center">
    <img alt="GoBarber API" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" />
    <br>
    GoBarber API
</h1>

<h4 align="center">
Um aplicativo de agendamento de barbeiro que permite aos usuários agendar uma consulta com seu barbeiro favorito e também mostrar ao barbeiro sua agenda para o dia.
</h4>

<p>
O texto abaixo tem como objetivo documentar o passo a passo de criação de um projeto NodeJS desenvolvido no [RocketSeat GoStack Bootcamp](https://rocketseat.com.br/bootcamp).
</p>

<p align="center">
    <img alt="License" src="https://img.shields.io/badge/made%20by-danilosalvador-blue">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">
</p>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#computer-passos">Passos</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :rocket: Tecnologias

Esse projeto foi desenvolvido usando as seguintes ferramentas

-  [Node.js][nodejs]
-  [VS Code][vc] with [ESLint][vceslint]
-  [Docker](https://www.docker.com/docker-community)
-  [yarn](https://yarnpkg.com)
-  [Insomnia](https://insomnia.rest/)

Esse projeto foi desenvolvido usando os seguintes pacotes:

-  [express](https://expressjs.com/): framework
-  [sucrase](https://github.com/alangpierce/sucrase): permitir usar as ultimas novidades do JS no Node, como por exemplo o import (usar apenas como depedência de DESENVOLVIMENTO)
-  [nodemon](https://nodemon.io/): atualização automática quando for feita alguma alteração no código (usar apenas como depedência de DESENVOLVIMENTO)
-  [eslint](https://eslint.org/): usado para padronização de código (usar apenas como depedência de DESENVOLVIMENTO), possui [extensão](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) para usar junto com o VSCode
-  [prettier](https://prettier.io/): usado para padronização de código (usar apenas como depedência de DESENVOLVIMENTO)
-  [sequelize](http://docs.sequelizejs.com/): usado com ORM
-  [sequelize-cli](https://github.com/sequelize/cli): interface para facilitar migrations, model, etc (usar apenas como depedência de DESENVOLVIMENTO)
-  [pg](https://sequelize.org/master/manual/dialect-specific-things.html): usada para o Sequelize com Postgres
-  [pg-hstore](https://sequelize.org/master/manual/dialect-specific-things.html): usada para o Sequelize com Postgres
-  [bcryptjs](https://github.com/dcodeIO/bcrypt.js): usado para criptografia
-  [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken): usado para JWT
-  [yup](https://github.com/jquense/yup): para validação dos dados de entrada (schema validation)

## :computer: Passos

###### SUCRASE + NODEMON
  1. Para rodar o projeto com as novas sintaxe do JS

```
      yarn sucrase nodemon -D
```

  2. Para execução com o nodemon, adicionar as linhas no package.json (o DEBUG é para permitir os breakpoints de debug):

```
      "scripts": {
        "dev": "nodemon src/server.js",
        "dev:debug": "nodemon --inspect src/server.js"
      },
```

  3. Criar o arquivo nodemon.json na raíz do projeto (o parâmetro -r diz para executar antes de subir a aplicação):

```
      {
        "execMap": {
          "js": "node -r sucrase/register"
        }
      }
```

  4. Rodar o projeto:

```
      yarn dev
```

  5. Configuração do DEBUG
      A. No aba de DEBUG do VSCode, adicionar launch uma personalizada e em seguida o item Node.js no menu que abrir
      B. No arquivo launch.json, modificar o request e adicionar o protocol e restart:

```
        "request": "attach",
        "protocol": "inspector",
        "restart": true,
```

      D. Para executar o projeto em mode debug

```
          yarn dev:debug
```
          
          VSCode Debug (lateral esquerda): start

###### DOCKER
  1. https://docs.docker.com/install/
  2. Comandos básicos
    A. Containers instalados:

```
        docker ps
```

    B. Todos os containers (inclusive os parados): 

```
        docker ps -a
```

    C. Parar a conteiner: 

```    
        docker stop **<container_name>**
```

    D. Iniciar o conteiner: 

```
        docker start **<container_name or container_id>**
```

    E. Log do container: 

```
        docker logs **<container_name>**
```

###### POSTGRES no DOCKER
  1. Confirmar versão e comandos: https://hub.docker.com/_/postgres

```
        docker pull postgres
```

  2. Terminal:
```
        docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

  3. Interface visual para conectar no Postgres: 
        Postbird: https://www.electronjs.org/apps/postbird
  4. Username: postgress
     Password: docker

###### SEQUELIZE
  ORM para Node.JS e bancos relacionais
  Conceitos:
    1. MIGRATION: script para criação das tabelas
    2. SEEDS: dados para desenvolvimento e testes

###### ESLINT
  1. Instalação: 

```
  yarn add eslint -D
```

  2. Inicialização: 

```
  yarn eslint --init
```

  3. Configuração
    A. How would you like to use ESLint? 
        To check syntax, find problems, and enforce code style  
    B. What type of modules does your project use? 
        JavaScript modules (import/export) 
    C. Which framework does your project use?
        None of these 
    D. Does your project use TypeScript?
        N
    E. Where does your code run? 
        Node
    F. How would you like to define a style for your project? 
        Use a popular style guide
    G. Which style guide do you want to follow? 
        Airbnb: https://github.com/airbnb/javascript
    H. What format do you want your config file to be in? (Use arrow keys)
        JavaScript 
    I. Would you like to install them now with npm?
        Y
    J. Apagar o arquivo package-lock.json
    K. Rodar o comando: yarn
    L. Instalar a extensão: ESLint
    M. Abrir (CMD+SHIFT+P): Preferences: Open Settings (JSON)

```
            "eslint.packageManager": "yarn",
            "[javascript]": {
              "editor.codeActionsOnSave": {
                  "source.fixAll.eslint": true
              }
          },
          "[javascriptreact]": {
              "editor.codeActionsOnSave": {
                  "source.fixAll.eslint": true
              }
          }
```

    N. Abrir o arquivo .eslintrc.js e adicionar as linhas abaixo:

```
          rules: {
            'class-methods-use-this': 'off',
            'no-param-reassign': 'off',
            'camelcase': 'off',
            'no-unused-vars': ['error', { 'argsIgnorePattern': 'next' }],
        },
```

    O. Caso não funcione, tente adicionar as linhas abaixo .eslintrc.js, salvar e remover logo em seguinda

```
        settings: {
            "import/resolver": {
                "babel-plugin-root-import": {
                    rootPathSuffix: "src"
                },
            },
        },
```

###### PRETTIER
    1. yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
    2. Alterar .eslintrc.js (sendo que o 'airbnb-base' já deve estar adicionado no extends):

```
            extends: [
                'airbnb-base',
                'prettier'
            ],
            plugins: [
                'prettier'
            ],
            rules: {
                'prettier/prettier':'error',
                (...),
            }
```

    3. Criar o arquivo .prettierrc na raíz do projeto:

```
        {
            "singleQuote": true,
            "trailingComma": "es5"
        }
```

*Rodar para padronizar/corrigir todos os arquivos:

```
    yarn eslint --fix src --ext .js
```

###### SEQUELIZE
    1. Adicionar os pacotes
        yarn add sequelize
        yarn add sequilize-cli -D
    2. Criar o arquivo .sequelizerc na raíz do projeto (ver projeto para o conteúdo)
    3. Adicionar os pacotes (caso tenha usado o postgres)
        yarn add pg pg-hstore
    4. Criação de migrations:
        yarn sequelize migration:create --name=create-users
    5. Após editar o arquivo migration criado, rodar o comando abaixo para criar as tabelas:
        yarn sequelize db:migrate
    6. Para desfazer a migration:
        A. Última:
            yarn sequelize db:migrate:undo
        B. Todas:
            yarn sequelize db.migrate:undo:all
    
## :memo: Licença
Este projeto está sob a licença MIT. Consulte a [LICENÇA](LICENSE.md) para obter mais informações.

---

Feito com ♥ by Danilo Salvador