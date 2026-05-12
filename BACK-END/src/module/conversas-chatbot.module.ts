import { Body, Controller, Delete, Get, Injectable, Module, Param, Post, Put } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConversaChatbot } from '../db/entities';

@Injectable()
export class ConversasChatbotService {
  constructor(
    @InjectRepository(ConversaChatbot)
    private readonly repository: Repository<ConversaChatbot>,
  ) {}

  findAll() {
    return this.repository.find({ relations: ['usuario', 'mensagens'] });
  }

  findOne(id: string) {
    return this.repository.findOne({ where: { id }, relations: ['usuario', 'mensagens'] });
  }

  create(data: Partial<ConversaChatbot>) {
    return this.repository.save(this.repository.create(data));
  }

  async update(id: string, data: Partial<ConversaChatbot>) {
    await this.repository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.repository.delete(id);
    return { deleted: true };
  }
}

@Controller('conversas-chatbot')
export class ConversasChatbotController {
  constructor(private readonly service: ConversasChatbotService) {}

  @Get()
  all() {
    return this.service.findAll();
  }

  @Get(':id')
  one(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() body: Partial<ConversaChatbot>) {
    return this.service.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: Partial<ConversaChatbot>) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([ConversaChatbot])],
  providers: [ConversasChatbotService],
  controllers: [ConversasChatbotController],
})
export class ConversasChatbotModule {}
