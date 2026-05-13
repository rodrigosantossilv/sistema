import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Carrinho } from './carrinho.entity';
import { ConversaChatbot } from './conversa-chatbot.entity';
import { Endereco } from './endereco.entity';
import { Pedido } from './pedido.entity';
import { Vendedor } from './vendedor.entity';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 200 })
  nome: string;

  @Column({ length: 200, unique: true })
  email: string;

  @Column({ length: 200 })
  senha: string;

  @Column({ length: 30, name: 'cpf_cnpj' })
  cpfCnpj: string;

  @Column({ length: 50 })
  telefone: string;

  @Column({
    type: 'enum',
    enum: ['cliente', 'vendedor', 'admin'],
    default: 'cliente',
  })
  tipo: 'cliente' | 'vendedor' | 'admin';

  @CreateDateColumn({ name: 'criado_em' })
  criadoEm: Date;

  @UpdateDateColumn({ name: 'atualizado_em' })
  atualizadoEm: Date;

  @OneToMany(() => Endereco, (endereco) => endereco.usuario)
  enderecos: Endereco[];

  @OneToOne(() => Vendedor, (vendedor) => vendedor.usuario)
  vendedor: Vendedor;

  @OneToMany(() => Carrinho, (carrinho) => carrinho.usuario)
  carrinhos: Carrinho[];

  @OneToMany(() => Pedido, (pedido) => pedido.usuario)
  pedidos: Pedido[];

  @OneToMany(() => ConversaChatbot, (conversa) => conversa.usuario)
  conversas: ConversaChatbot[];
}
