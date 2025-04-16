# Revisão Back-End

### Criação do Projeto

- npm init // inicia o projeto e cria o packge.json
- npm i express // instala o o pacote do framework express
- pasta src // separa os arquivos do projeto dos arquivos de configuração que ficam na raiz
- criação do server.js (arquivo de entrada/main do projeto)
- mudar o tipo de importação de require para import
    "type": "module" no arquivo packge.json

### Rodar o projeto

- npm run dev (run roda um script do package.json)
- npm start (o único script que posso rodar sem o run)
- Para que serve o --watch no comando "node  -- watch src/server.js" do package.json
    - reinicia o servidor sempre que houver alguma mudança salva nos arquivos da APi.
 
### Router

- Para que servem os Routers?
    Criar rotas com os métodos GET, POST, PUT, DELETE e PATCH

### MVC
- O que é o MVC e qual a sua importância?
    - Model, View e Controller. Utilizamos ele para organizar e estruturar o código

### Prisma 

- O que é um ORM?
    Ele faz o mapeamento do banco de dados para um objeto da linguagem de programação para executar as operações na base de dados

- Quais as vantagens de usar o Prisma?  
    1. Facilidade de executar as operações no Banco de Dados (Produtividade)
    2. Facilidade de alterar o sistema de Banco de Dados
        EX: MySQL para Postgres

- Como usar o prisma?
        - npm i prisma -D (Instala o pacote do prisma como dependencia dev)
        - npm prisma init // inicializa o prisma no projeto
            - cria a pasta prisma e o schema.prisma (modelo), além .env com a string de conexão com banco para ser atualizada com os dados de conexão

        - npx prisma db pull // gera o schema do prisma a partir de um banco de dados já criado

        - npx prisma db push // cria as tabelas no BD a partir de um schema do prisma já criado

        - npm i @prisma/client // instala o Prisma Client

        - npx prisma generate // cria as funções do prisma client de acordo com o modelo (depois de instalar o @prisma/client)