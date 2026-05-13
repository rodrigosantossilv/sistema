import { Body, Controller, Delete, Get, Injectable, Module, Param, Post, Put } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carrinho } from '../db/entities';

@Injectable()
export class CarrinhosService {
  constructor(
    @InjectRepository(Carrinho)
    private readonly repository: Repository<Carrinho>,
  ) {}

  findAll() {
    return this.repository.find({ relations: ['usuario', 'itens'] });
  }

  findOne(id: string) {
    return this.repository.findOne({ where: { id }, relations: ['usuario', 'itens'] });
  }

  create(data: Partial<Carrinho>) {
    return this.repository.save(this.repository.create(data));
  }

  async update(id: string, data: Partial<Carrinho>) {
    await this.repository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.repository.delete(id);
    return { deleted: true };
  }
}

@Controller('carrinhos')
export class CarrinhosController {
  constructor(private readonly service: CarrinhosService) {}

  @Get()
  all() {
    return this.service.findAll();
  }

  @Get(':id')
  one(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() body: Partial<Carrinho>) {
    return this.service.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: Partial<Carrinho>) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([Carrinho])],
  providers: [CarrinhosService],
  controllers: [CarrinhosController],
})
export class CarrinhosModule {}
