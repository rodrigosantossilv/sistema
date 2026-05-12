import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ItemPedido } from './item-pedido.entity';
import { Produto } from './produto.entity';
import { TransacaoVendedor } from './transacao-vendedor.entity';
import { Usuario } from './usuario.entity';

@Entity('vendedores')
export class Vendedor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Usuario, (usuario) => usuario.vendedor, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  percentualComissao: number;

  @Column('decimal', { precision: 12, scale: 2, default: 0 })
  saldoDisponivel: number;

  @Column('decimal', { precision: 12, scale: 2, default: 0 })
  saldoPendente: number;

  @Column({
    type: 'enum',
    enum: ['ativo', 'bloqueado'],
    default: 'ativo',
  })
  status: 'ativo' | 'bloqueado';

  @CreateDateColumn({ name: 'criado_em' })
  criadoEm: Date;

  @OneToMany(() => Produto, (produto) => produto.vendedor)
  produtos: Produto[];

  @OneToMany(() => ItemPedido, (itemPedido) => itemPedido.vendedor)
  itensPedido: ItemPedido[];

  @OneToMany(() => TransacaoVendedor, (transacao) => transacao.vendedor)
  transacoes: TransacaoVendedor[];
}
