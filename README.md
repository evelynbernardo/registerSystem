

## O projeto
  O Register System é um sistema de cadastro de pessoas que possui 4 páginas:
 - "/": A página inicial onde o usuário poderar entrar no sistema inserindo um email e senha válidos ou ser redirecionado para fazer o cadastro.
 - "/signup": O usuario poderá criar um user, inserindo nome, email e uma senha.
 - "/register": O usuário podera fazer um cadastro de pessoas que será salvo no DB assim que o formulario for preenchido e submetido.
 - "/list": A pessoas cadastradas serão listadas.

### Execução

- Para iniciar o servidor: json-server --watch db.json --delay 2000 --port 5000
- Para iniciar a aplicação: yarn start

### TO DO

- [ ] Consumir a lista da API (atualmente é consumido a partir de um mock)
- [ ] Permitir busca por nome
- [ ] Editar a lista


