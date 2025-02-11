- [x] Configurar rotas
- [x] Configurar header links
- [x] Configurar axios
- [x] Home
  - [x] Buscar os produtos
  - [x] mostrar os produtos em tela
  - [x] Formatar o preço
  - [x] Add Itens no carrinho
    - [x] verificar se o item está no carrinho PUT | POST
    - [x] PUT
    - [x] POST
- [x] Carrinho
  - [x] Listar os produtos no carrinho
  - [x] excluir produto
  - [x] alterar quantidade do produto


  # Arquivo deve ser criado se apresentar erro no netlify.com

  - Nome: `netlify.tom`
    - Conteúdo:
      
      ```ts
      [[redirects]]
        from = "/*"
        to = "/index.html"
        status = 200
        force = false
        ```
