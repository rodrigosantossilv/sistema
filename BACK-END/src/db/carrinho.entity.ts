import { CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ItemCarrinho } from './item-carrinho.entity';
import { Usuario } from './usuario.entity';

@Entity('carrinhos')
export class Carrinho {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.carrinhos, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @CreateDateColumn({ name: 'criado_em' })
  criadoEm: Date;

  @OneToMany(() => ItemCarrinho, (item) => item.carrinho)
  itens: ItemCarrinho[];
}
