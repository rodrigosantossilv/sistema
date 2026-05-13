import { Body, Controller, Delete, Get, Injectable, Module, Param, Post, Put } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemCarrinho } from '../db/entities';

@Injectable()
export class ItensCarrinhoService {
  constructor(
    @InjectRepository(ItemCarrinho)
    private readonly repository: Repository<ItemCarrinho>,
  ) {}

  findAll() {
    return this.repository.find({ relations: ['carrinho', 'produto'] });
  }

  findOne(id: string) {
    return this.repository.findOne({ where: { id }, relations: ['carrinho', 'produto'] });
  }

  create(data: Partial<ItemCarrinho>) {
    return this.repository.save(this.repository.create(data));
  }

  async update(id: string, data: Partial<ItemCarrinho>) {
    await this.repository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.repository.delete(id);
    return { deleted: true };
  }
}

@Controller('itens-carrinho')
export class ItensCarrinhoController {
  constructor(private readonly service: ItensCarrinhoService) {}

  @Get()
  all() {
    return this.service.findAll();
  }

  @Get(':id')
  one(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() body: Partial<ItemCarrinho>) {
    return this.service.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: Partial<ItemCarrinho>) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([ItemCarrinho])],
  providers: [ItensCarrinhoService],
  controllers: [ItensCarrinhoController],
})
export class ItensCarrinhoModule {}
