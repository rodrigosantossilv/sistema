import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Carrinho } from './carrinho.entity';
import { Produto } from './produto.entity';

@Entity('itens_carrinho')
export class ItemCarrinho {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Carrinho, (carrinho) => carrinho.itens, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'carrinho_id' })
  carrinho: Carrinho;

  @ManyToOne(() => Produto, (produto) => produto.itensCarrinho, { onDelete: 'SET NULL', nullable: true })
  @JoinColumn({ name: 'produto_id' })
  produto: Produto;

  @Column('integer')
  quantidade: number;

  @Column('decimal', { precision: 12, scale: 2 })
  preco: number;
}
