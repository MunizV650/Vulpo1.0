### Projeto Vulpo com MySQL

### Executar o Script para criação do banco de dados e inserir alguns dados
### Copiar esse script mysql.sql dentro do banco de dados e executar
    vulpo/public/db/mysql.sql

### Para executar o aplicativo em modo GitBash na pasta raiz do Vulpo
    set DEBUG=vulpo:* & npm start


### Cria o aplicativo com o Express
    express --ejs vulpo

### Gera as depedências tipo o node_modules
    npm install

### para subir e rodar o projeto
    set DEBUG=vulpo:* & npm start

### Copiar Template.zip na pasta public

### na pasta public clique em index.html para ver o Site
### e na pasta public/admin clique em index.html para ver a administração

### na pasta public/admin instalar o Bower
    bower install

### Plugin MySQL
    ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY 'jr71103625';
    ALTER USER 'user'@'localhost' IDENTIFIED WITH mysql_native_password BY 'jr71103625';
    ALTER USER 'user'@'127.0.0.1' IDENTIFIED WITH mysql_native_password BY 'jr71103625';

### Node MySQL2 na pasta vulpo
    npm install mysql2 --save

### Instalar o Redis e o express session
    npm install --save express-session connect-redis
    npm install --save express-session connect-redis@3.3.3
...roda esse comando acima se estiver com problemas no redis e instala a versão anexada no curso que tudo vai dar certo.

### Instalar o Formidable para gravar no bano de dados na pasta vulpo
    npm install formidable --save

### Instalar o bcrypt para criptografar senha no banco de dados (RASH)
    npm install bcrypt