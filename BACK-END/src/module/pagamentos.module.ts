import { Body, Controller, Delete, Get, Injectable, Module, Param, Post, Put } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pagamento } from '../db/entities';

@Injectable()
export class PagamentosService {
  constructor(
    @InjectRepository(Pagamento)
    private readonly repository: Repository<Pagamento>,
  ) {}

  findAll() {
    return this.repository.find({ relations: ['pedido'] });
  }

  findOne(id: string) {
    return this.repository.findOne({ where: { id }, relations: ['pedido'] });
  }

  create(data: Partial<Pagamento>) {
    return this.repository.save(this.repository.create(data));
  }

  async update(id: string, data: Partial<Pagamento>) {
    await this.repository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.repository.delete(id);
    return { deleted: true };
  }
}

@Controller('pagamentos')
export class PagamentosController {
  constructor(private readonly service: PagamentosService) {}

  @Get()
  all() {
    return this.service.findAll();
  }

  @Get(':id')
  one(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() body: Partial<Pagamento>) {
    return this.service.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: Partial<Pagamento>) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([Pagamento])],
  providers: [PagamentosService],
  controllers: [PagamentosController],
})
export class PagamentosModule {}
