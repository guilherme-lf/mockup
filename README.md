
# 🛍️ FakeStore - Projeto Angular

Este é um projeto de e-commerce simples desenvolvido com Angular, que simula uma loja virtual com funcionalidades básicas como visualização de produtos, detalhes de cada produto, carrinho de compras e sistema de login fictício.

## 🚀 Tecnologias Utilizadas

- [Angular](https://angular.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Bootstrap](https://getbootstrap.com/) (estilização)
- HTML & CSS

## 📁 Estrutura do Projeto

```bash
src/
├── app/
│   ├── cadastro/           # Componentes de cadastro de usuário
│   ├── cart/               # Carrinho de compras
│   ├── detail/             # Detalhes do produto
│   ├── footer/             # Rodapé do site
│   ├── header/             # Cabeçalho com menu e busca
│   ├── home/               # Página inicial
│   ├── login/              # Tela de login fictício
│   ├── models/             # Interfaces e modelos de dados
│   ├── produtos/           # Listagem de produtos
│   ├── app.routes.ts       # Configuração das rotas
│   └── app.component.*     # Raiz do aplicativo
```

## ✨ Funcionalidades

- Listagem de produtos com preços.
- Detalhamento de cada produto com descrição.
- Carrinho de compras com possibilidade de:
  - Adicionar item
  - Remover item
  - Esvaziar carrinho
- Simulação de cadastro e login (sem backend).
- Barra de busca (não funcional, apenas interface).
- Design responsivo com Bootstrap.

## 📷 Imagens do Projeto

> Adicione capturas de tela aqui, como:
- Página de produtos
- Página de detalhes
- Carrinho de compras

## 🧪 Como Executar o Projeto

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/fakestore.git
```

2. Instale as dependências:
```bash
npm install
```

3. Rode o projeto:
```bash
ng serve
```

4. Acesse no navegador:
```
http://localhost:4200
```

## 📌 Observações

- Este projeto utiliza dados mockados diretamente no `ProductService`.
- Ideal para treinar Angular, componentes, rotas e lógica de carrinho.

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar e modificar.

---

Desenvolvido com 💻 por [Seu Nome]
