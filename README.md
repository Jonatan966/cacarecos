<div align="center">
  <h1>Cacarecos</h1>
</div>

Esse projeto consiste em um e-commerce simplificado

## Tecnologias Utilizadas

- NextJS 13
- Stripe
- Hygraph
- Clerk
- ShadcnUI / RadixUI

## Como Iniciar

1. Configure o Hygraph seguindo [esse modelo](https://app.hygraph.com/clone/0190a8de65a3415ba08a84742be5fa3a?name=Cacarecos);
2. Configure o Clerk;
3. Cadastre os produtos no Hygraph;

   3.1 É necessário adicionar o `priceId` no produto, esse valor pode ser encontrado no produto cadastrado no Stripe;

4. Cadastre os produtos no Stripe;

   4.1 É necessário adicionar um metadado `externalID`, contendo o ID do produto no Hygraph;

5. Lembre de popular o model Carrossel no Hygraph;
6. Configure um Webhook no Clerk, para o evento do tipo `user.created`, apontando para a rota `/api/webhook/user`;
7. Configure um Webhook no Stripe, para o evento do tipo `checkout.session.completed`, apontando para a rota `/api/webhook/order`;
8. Preencha todas as variáveis de ambiente necessárias. Você pode usar [esse arquivo](./.env.example) como exemplo;

## Capturas de Tela

![Página Inicial](/.github/home.png)
![Página do Produto](/.github/product.png)
![Página de Pedidos](/.github/orders.png)

## Futuros Passos

- [ ] Sistema de avaliações dos produtos
- [ ] Dashboard para cadastro de produtos
- [ ] Favoritar um produto
- [ ] Responsividade
