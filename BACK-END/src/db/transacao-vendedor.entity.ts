import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ItemPedido } from './item-pedido.entity';
import { Vendedor } from './vendedor.entity';

@Entity('transacoes_vendedor')
export class TransacaoVendedor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Vendedor, (vendedor) => vendedor.transacoes, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'vendedor_id' })
  vendedor: Vendedor;

  @ManyToOne(() => ItemPedido, { onDelete: 'SET NULL', nullable: true })
  @JoinColumn({ name: 'item_pedido_id' })
  itemPedido: ItemPedido;

  @Column({
    type: 'enum',
    enum: ['comissao', 'saque'],
  })
  tipo: 'comissao' | 'saque';

  @Column('decimal', { precision: 12, scale: 2 })
  valor: number;

  @Column({
    type: 'enum',
    enum: ['pendente', 'disponivel', 'pago'],
    default: 'pendente',
  })
  status: 'pendente' | 'disponivel' | 'pago';

  @CreateDateColumn({ name: 'criado_em' })
  criadoEm: Date;
}
