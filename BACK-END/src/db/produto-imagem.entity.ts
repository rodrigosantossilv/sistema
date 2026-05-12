import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Produto } from './produto.entity';

@Entity('imagens_produto')
export class ProdutoImagem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Produto, (produto) => produto.imagens, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'produto_id' })
  produto: Produto;

  @Column({ length: 500, name: 'url_imagem' })
  urlImagem: string;

  @CreateDateColumn({ name: 'criado_em' })
  criadoEm: Date;
}
