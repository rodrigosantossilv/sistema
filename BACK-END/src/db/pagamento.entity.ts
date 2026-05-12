import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Pedido } from './pedido.entity';

@Entity('pagamentos')
export class Pagamento {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Pedido, (pedido) => pedido.pagamentos, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'pedido_id' })
  pedido: Pedido;

  @Column({ length: 100 })
  gateway: string;

  @Column({ length: 200, name: 'transacao_id' })
  transacaoId: string;

  @Column({
    type: 'enum',
    enum: ['pix', 'cartao', 'boleto'],
  })
  metodoPagamento: 'pix' | 'cartao' | 'boleto';

  @Column('decimal', { precision: 12, scale: 2 })
  valor: number;

  @Column({
    type: 'enum',
    enum: ['pendente', 'pago', 'recusado'],
    default: 'pendente',
  })
  status: 'pendente' | 'pago' | 'recusado';

  @CreateDateColumn({ name: 'criado_em' })
  criadoEm: Date;
}
