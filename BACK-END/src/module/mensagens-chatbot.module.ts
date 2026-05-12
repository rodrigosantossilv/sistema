import { Body, Controller, Delete, Get, Injectable, Module, Param, Post, Put } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MensagemChatbot } from '../db/entities';

@Injectable()
export class MensagensChatbotService {
  constructor(
    @InjectRepository(MensagemChatbot)
    private readonly repository: Repository<MensagemChatbot>,
  ) {}

  findAll() {
    return this.repository.find({ relations: ['conversa'] });
  }

  findOne(id: string) {
    return this.repository.findOne({ where: { id }, relations: ['conversa'] });
  }

  create(data: Partial<MensagemChatbot>) {
    return this.repository.save(this.repository.create(data));
  }

  async update(id: string, data: Partial<MensagemChatbot>) {
    await this.repository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.repository.delete(id);
    return { deleted: true };
  }
}

@Controller('mensagens-chatbot')
export class MensagensChatbotController {
  constructor(private readonly service: MensagensChatbotService) {}

  @Get()
  all() {
    return this.service.findAll();
  }

  @Get(':id')
  one(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() body: Partial<MensagemChatbot>) {
    return this.service.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: Partial<MensagemChatbot>) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([MensagemChatbot])],
  providers: [MensagensChatbotService],
  controllers: [MensagensChatbotController],
})
export class MensagensChatbotModule {}
