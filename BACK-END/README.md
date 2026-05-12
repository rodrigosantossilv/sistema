# Backend - Sistema E-commerce

API REST desenvolvida com NestJS e TypeORM para PostgreSQL.

## Funcionalidades

- CRUD completo para todas as entidades do sistema
- Autenticação de usuários (cliente, vendedor, admin)
- Gerenciamento de produtos e categorias
- Sistema de carrinho de compras
- Processamento de pedidos e pagamentos
- Controle de estoque
- Sistema de comissões para vendedores
- Chatbot integrado

## Tecnologias

- **NestJS**: Framework Node.js para aplicações server-side
- **TypeORM**: ORM para TypeScript
- **PostgreSQL**: Banco de dados relacional
- **TypeScript**: Superset tipado do JavaScript

## Instalação

1. Instale as dependências:
```bash
npm install
```

2. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações do PostgreSQL.

3. Execute a aplicação:
```bash
npm run start:dev
```

A aplicação irá automaticamente criar o banco de dados se ele não existir.

## Scripts Disponíveis

- `npm run start:dev` - Inicia em modo desenvolvimento
- `npm run start:prod` - Inicia em modo produção
- `npm run build` - Compila o projeto
- `npm run test` - Executa os testes

## API Endpoints

### Usuários
- `GET /usuarios` - Lista todos os usuários
- `POST /usuarios` - Cria um novo usuário
- `GET /usuarios/:id` - Busca usuário por ID
- `PUT /usuarios/:id` - Atualiza usuário
- `DELETE /usuarios/:id` - Remove usuário

### Endereços
- `GET /enderecos` - Lista todos os endereços
- `POST /enderecos` - Cria um novo endereço
- `GET /enderecos/:id` - Busca endereço por ID
- `PUT /enderecos/:id` - Atualiza endereço
- `DELETE /enderecos/:id` - Remove endereço

### Vendedores
- `GET /vendedores` - Lista todos os vendedores
- `POST /vendedores` - Cria um novo vendedor
- `GET /vendedores/:id` - Busca vendedor por ID
- `PUT /vendedores/:id` - Atualiza vendedor
- `DELETE /vendedores/:id` - Remove vendedor

### Categorias
- `GET /categorias` - Lista todas as categorias
- `POST /categorias` - Cria uma nova categoria
- `GET /categorias/:id` - Busca categoria por ID
- `PUT /categorias/:id` - Atualiza categoria
- `DELETE /categorias/:id` - Remove categoria

### Produtos
- `GET /produtos` - Lista todos os produtos
- `POST /produtos` - Cria um novo produto
- `GET /produtos/:id` - Busca produto por ID
- `PUT /produtos/:id` - Atualiza produto
- `DELETE /produtos/:id` - Remove produto

### Carrinhos
- `GET /carrinhos` - Lista todos os carrinhos
- `POST /carrinhos` - Cria um novo carrinho
- `GET /carrinhos/:id` - Busca carrinho por ID
- `PUT /carrinhos/:id` - Atualiza carrinho
- `DELETE /carrinhos/:id` - Remove carrinho

### Pedidos
- `GET /pedidos` - Lista todos os pedidos
- `POST /pedidos` - Cria um novo pedido
- `GET /pedidos/:id` - Busca pedido por ID
- `PUT /pedidos/:id` - Atualiza pedido
- `DELETE /pedidos/:id` - Remove pedido

### Pagamentos
- `GET /pagamentos` - Lista todos os pagamentos
- `POST /pagamentos` - Cria um novo pagamento
- `GET /pagamentos/:id` - Busca pagamento por ID
- `PUT /pagamentos/:id` - Atualiza pagamento
- `DELETE /pagamentos/:id` - Remove pagamento

### E outros endpoints para:
- Itens do carrinho
- Imagens de produtos
- Transações de vendedores
- Movimentações de estoque
- Conversas do chatbot
- Mensagens do chatbot

## Estrutura do Banco

O sistema utiliza as seguintes tabelas principais:

- `usuarios` - Dados dos usuários
- `enderecos` - Endereços dos usuários
- `vendedores` - Dados específicos dos vendedores
- `categorias` - Categorias dos produtos
- `produtos` - Catálogo de produtos
- `imagens_produto` - Imagens dos produtos
- `carrinhos` - Carrinhos de compras
- `itens_carrinho` - Itens dos carrinhos
- `pedidos` - Pedidos realizados
- `itens_pedido` - Itens dos pedidos
- `pagamentos` - Dados dos pagamentos
- `transacoes_vendedor` - Transações financeiras dos vendedores
- `movimentacoes_estoque` - Controle de entrada/saída de estoque
- `conversas_chatbot` - Conversas com o chatbot
- `mensagens_chatbot` - Mensagens das conversas

## Desenvolvimento

Para contribuir com o desenvolvimento:

1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Faça commit das suas alterações
4. Faça push para a branch
5. Abra um Pull Request

## Licença

Este projeto está sob a licença UNLICENSED.
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
