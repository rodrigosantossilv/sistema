import { Body, Controller, Delete, Get, Injectable, Module, Param, Post, Put } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TransacaoVendedor } from '../db/entities';

@Injectable()
export class TransacoesVendedorService {
  constructor(
    @InjectRepository(TransacaoVendedor)
    private readonly repository: Repository<TransacaoVendedor>,
  ) {}

  findAll() {
    return this.repository.find({ relations: ['vendedor', 'itemPedido'] });
  }

  findOne(id: string) {
    return this.repository.findOne({ where: { id }, relations: ['vendedor', 'itemPedido'] });
  }

  create(data: Partial<TransacaoVendedor>) {
    return this.repository.save(this.repository.create(data));
  }

  async update(id: string, data: Partial<TransacaoVendedor>) {
    await this.repository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.repository.delete(id);
    return { deleted: true };
  }
}

@Controller('transacoes-vendedor')
export class TransacoesVendedorController {
  constructor(private readonly service: TransacoesVendedorService) {}

  @Get()
  all() {
    return this.service.findAll();
  }

  @Get(':id')
  one(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() body: Partial<TransacaoVendedor>) {
    return this.service.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: Partial<TransacaoVendedor>) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([TransacaoVendedor])],
  providers: [TransacoesVendedorService],
  controllers: [TransacoesVendedorController],
})
export class TransacoesVendedorModule {}
