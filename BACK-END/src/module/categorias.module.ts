import { Body, Controller, Delete, Get, Injectable, Module, Param, Post, Put } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from '../db/entities';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(Categoria)
    private readonly repository: Repository<Categoria>,
  ) {}

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOne({ where: { id } });
  }

  create(data: Partial<Categoria>) {
    return this.repository.save(this.repository.create(data));
  }

  async update(id: string, data: Partial<Categoria>) {
    await this.repository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.repository.delete(id);
    return { deleted: true };
  }
}

@Controller('categorias')
export class CategoriasController {
  constructor(private readonly service: CategoriasService) {}

  @Get()
  all() {
    return this.service.findAll();
  }

  @Get(':id')
  one(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() body: Partial<Categoria>) {
    return this.service.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: Partial<Categoria>) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([Categoria])],
  providers: [CategoriasService],
  controllers: [CategoriasController],
})
export class CategoriasModule {}
