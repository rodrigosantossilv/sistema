import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Endereco } from './endereco.entity';
import { ItemPedido } from './item-pedido.entity';
import { Pagamento } from './pagamento.entity';
import { Usuario } from './usuario.entity';

@Entity('pedidos')
export class Pedido {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.pedidos, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @ManyToOne(() => Endereco, (endereco) => endereco.pedidos, { onDelete: 'SET NULL', nullable: true })
  @JoinColumn({ name: 'endereco_id' })
  endereco: Endereco;

  @Column('decimal', { precision: 12, scale: 2 })
  total: number;

  @Column({
    type: 'enum',
    enum: ['pendente', 'pago', 'enviado', 'finalizado', 'cancelado'],
    default: 'pendente',
  })
  status: 'pendente' | 'pago' | 'enviado' | 'finalizado' | 'cancelado';

  @CreateDateColumn({ name: 'criado_em' })
  criadoEm: Date;

  @OneToMany(() => ItemPedido, (item) => item.pedido)
  itens: ItemPedido[];

  @OneToMany(() => Pagamento, (pagamento) => pagamento.pedido)
  pagamentos: Pagamento[];
}
