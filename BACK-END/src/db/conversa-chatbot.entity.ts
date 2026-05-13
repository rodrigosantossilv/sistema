import { CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MensagemChatbot } from './mensagem-chatbot.entity';
import { Usuario } from './usuario.entity';

@Entity('conversas_chatbot')
export class ConversaChatbot {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.conversas, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @CreateDateColumn({ name: 'iniciado_em' })
  iniciadoEm: Date;

  @OneToMany(() => MensagemChatbot, (mensagem) => mensagem.conversa)
  mensagens: MensagemChatbot[];
}
