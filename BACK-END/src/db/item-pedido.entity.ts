import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Pedido } from './pedido.entity';
import { Produto } from './produto.entity';
import { Vendedor } from './vendedor.entity';

@Entity('itens_pedido')
export class ItemPedido {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Pedido, (pedido) => pedido.itens, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'pedido_id' })
  pedido: Pedido;

  @ManyToOne(() => Produto, (produto) => produto.itensPedido, { onDelete: 'SET NULL', nullable: true })
  @JoinColumn({ name: 'produto_id' })
  produto: Produto;

  @ManyToOne(() => Vendedor, (vendedor) => vendedor.itensPedido, { onDelete: 'SET NULL', nullable: true })
  @JoinColumn({ name: 'vendedor_id' })
  vendedor: Vendedor;

  @Column('integer')
  quantidade: number;

  @Column('decimal', { precision: 12, scale: 2 })
  preco: number;

  @Column('decimal', { precision: 12, scale: 2 })
  valorComissao: number;
}
