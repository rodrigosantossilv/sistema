import { Body, Controller, Delete, Get, Injectable, Module, Param, Post, Put } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProdutoImagem } from '../db/entities';

@Injectable()
export class ImagensProdutoService {
  constructor(
    @InjectRepository(ProdutoImagem)
    private readonly repository: Repository<ProdutoImagem>,
  ) {}

  findAll() {
    return this.repository.find({ relations: ['produto'] });
  }

  findOne(id: string) {
    return this.repository.findOne({ where: { id }, relations: ['produto'] });
  }

  create(data: Partial<ProdutoImagem>) {
    return this.repository.save(this.repository.create(data));
  }

  async update(id: string, data: Partial<ProdutoImagem>) {
    await this.repository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.repository.delete(id);
    return { deleted: true };
  }
}

@Controller('imagens-produto')
export class ImagensProdutoController {
  constructor(private readonly service: ImagensProdutoService) {}

  @Get()
  all() {
    return this.service.findAll();
  }

  @Get(':id')
  one(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() body: Partial<ProdutoImagem>) {
    return this.service.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: Partial<ProdutoImagem>) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([ProdutoImagem])],
  providers: [ImagensProdutoService],
  controllers: [ImagensProdutoController],
})
export class ImagensProdutoModule {}
