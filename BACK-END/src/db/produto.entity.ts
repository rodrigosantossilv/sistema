import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Categoria } from './categoria.entity';
import { ItemCarrinho } from './item-carrinho.entity';
import { ItemPedido } from './item-pedido.entity';
import { MovimentacaoEstoque } from './movimentacao-estoque.entity';
import { ProdutoImagem } from './produto-imagem.entity';
import { Vendedor } from './vendedor.entity';

@Entity('produtos')
export class Produto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Vendedor, (vendedor) => vendedor.produtos, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'vendedor_id' })
  vendedor: Vendedor;

  @ManyToOne(() => Categoria, (categoria) => categoria.produtos, { onDelete: 'SET NULL', nullable: true })
  @JoinColumn({ name: 'categoria_id' })
  categoria: Categoria;

  @Column({ length: 100, unique: true })
  sku: string;

  @Column({ length: 200 })
  nome: string;

  @Column('text')
  descricao: string;

  @Column({ length: 100 })
  marca: string;

  @Column('decimal', { precision: 12, scale: 2 })
  preco: number;

  @Column('integer')
  estoque: number;

  @Column('decimal', { precision: 10, scale: 2 })
  peso: number;

  @Column({
    type: 'enum',
    enum: ['ativo', 'inativo'],
    default: 'ativo',
  })
  status: 'ativo' | 'inativo';

  @CreateDateColumn({ name: 'criado_em' })
  criadoEm: Date;

  @UpdateDateColumn({ name: 'atualizado_em' })
  atualizadoEm: Date;

  @OneToMany(() => ProdutoImagem, (imagem) => imagem.produto)
  imagens: ProdutoImagem[];

  @OneToMany(() => ItemCarrinho, (item) => item.produto)
  itensCarrinho: ItemCarrinho[];

  @OneToMany(() => ItemPedido, (item) => item.produto)
  itensPedido: ItemPedido[];

  @OneToMany(() => MovimentacaoEstoque, (movimentacao) => movimentacao.produto)
  movimentacoes: MovimentacaoEstoque[];
}
