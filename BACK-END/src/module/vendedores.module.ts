import { Body, Controller, Delete, Get, Injectable, Module, Param, Post, Put } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vendedor } from '../db/entities';

@Injectable()
export class VendedoresService {
  constructor(
    @InjectRepository(Vendedor)
    private readonly repository: Repository<Vendedor>,
  ) {}

  findAll() {
    return this.repository.find({ relations: ['usuario'] });
  }

  findOne(id: string) {
    return this.repository.findOne({ where: { id }, relations: ['usuario'] });
  }

  create(data: Partial<Vendedor>) {
    return this.repository.save(this.repository.create(data));
  }

  async update(id: string, data: Partial<Vendedor>) {
    await this.repository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.repository.delete(id);
    return { deleted: true };
  }
}

@Controller('vendedores')
export class VendedoresController {
  constructor(private readonly service: VendedoresService) {}

  @Get()
  all() {
    return this.service.findAll();
  }

  @Get(':id')
  one(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() body: Partial<Vendedor>) {
    return this.service.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: Partial<Vendedor>) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([Vendedor])],
  providers: [VendedoresService],
  controllers: [VendedoresController],
})
export class VendedoresModule {}
