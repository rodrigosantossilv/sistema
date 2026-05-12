import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Produto } from './produto.entity';

@Entity('movimentacoes_estoque')
export class MovimentacaoEstoque {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Produto, (produto) => produto.movimentacoes, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'produto_id' })
  produto: Produto;

  @Column({
    type: 'enum',
    enum: ['entrada', 'saida'],
  })
  tipo: 'entrada' | 'saida';

  @Column('integer')
  quantidade: number;

  @Column({ length: 200 })
  motivo: string;

  @CreateDateColumn({ name: 'criado_em' })
  criadoEm: Date;
}
