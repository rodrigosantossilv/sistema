import { Body, Controller, Delete, Get, Injectable, Module, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../db/entities';
import { CreateUsuarioDto, UpdateUsuarioDto } from '../dto';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly repository: Repository<Usuario>,
  ) {}

  findAll(): Promise<Usuario[]> {
    return this.repository.find({ relations: ['enderecos', 'vendedor'] });
  }

  findOne(id: string): Promise<Usuario | null> {
    return this.repository.findOne({ where: { id }, relations: ['enderecos', 'vendedor'] });
  }

  create(data: CreateUsuarioDto): Promise<Usuario> {
    return this.repository.save(this.repository.create(data));
  }

  async update(id: string, data: UpdateUsuarioDto): Promise<Usuario | null> {
    await this.repository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.repository.delete(id);
    return { deleted: true };
  }
}

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly service: UsuariosService) {}

  @Get()
  async all(): Promise<Usuario[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async one(@Param('id') id: string): Promise<Usuario | null> {
    return this.service.findOne(id);
  }

  @Post()
  async create(@Body(ValidationPipe) body: CreateUsuarioDto): Promise<Usuario> {
    return this.service.create(body);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body(ValidationPipe) body: UpdateUsuarioDto): Promise<Usuario | null> {
    return this.service.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  providers: [UsuariosService],
  controllers: [UsuariosController],
})
export class UsuariosModule {}
