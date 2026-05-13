import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios.module';
import { EnderecosModule } from './enderecos.module';
import { VendedoresModule } from './vendedores.module';
import { CategoriasModule } from './categorias.module';
import { ProdutosModule } from './produtos.module';
import { PedidosModule } from './pedidos.module';
import { PagamentosModule } from './pagamentos.module';
import { CarrinhosModule } from './carrinhos.module';
import { ItensCarrinhoModule } from './itens-carrinho.module';
import { ImagensProdutoModule } from './imagens-produto.module';
import { TransacoesVendedorModule } from './transacoes-vendedor.module';
import { MovimentacoesEstoqueModule } from './movimentacoes-estoque.module';
import { ConversasChatbotModule } from './conversas-chatbot.module';
import { MensagensChatbotModule } from './mensagens-chatbot.module';
import {
  Carrinho,
  Categoria,
  ConversaChatbot,
  Endereco,
  ItemCarrinho,
  ItemPedido,
  MensagemChatbot,
  MovimentacaoEstoque,
  Pagamento,
  Pedido,
  Produto,
  ProdutoImagem,
  TransacaoVendedor,
  Usuario,
  Vendedor,
} from '../db/entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_DATABASE || 'sistema',
      synchronize: true,
      logging: false,
      entities: [
        Usuario,
        Endereco,
        Vendedor,
        Categoria,
        Produto,
        ProdutoImagem,
        Carrinho,
        ItemCarrinho,
        Pedido,
        ItemPedido,
        Pagamento,
        TransacaoVendedor,
        MovimentacaoEstoque,
        ConversaChatbot,
        MensagemChatbot,
      ],
    }),
    UsuariosModule,
    EnderecosModule,
    VendedoresModule,
    CategoriasModule,
    ProdutosModule,
    PedidosModule,
    PagamentosModule,
    CarrinhosModule,
    ItensCarrinhoModule,
    ImagensProdutoModule,
    TransacoesVendedorModule,
    MovimentacoesEstoqueModule,
    ConversasChatbotModule,
    MensagensChatbotModule,
  ],
})
export class AppModule {}
