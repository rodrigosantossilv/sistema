import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ConversaChatbot } from './conversa-chatbot.entity';

@Entity('mensagens_chatbot')
export class MensagemChatbot {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => ConversaChatbot, (conversa) => conversa.mensagens, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'conversa_id' })
  conversa: ConversaChatbot;

  @Column({
    type: 'enum',
    enum: ['usuario', 'bot'],
  })
  remetente: 'usuario' | 'bot';

  @Column('text')
  mensagem: string;

  @CreateDateColumn({ name: 'criado_em' })
  criadoEm: Date;
}
