import { IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, Min } from 'class-validator';

export class CreateProdutoDto {
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  @IsString({ message: 'Nome deve ser uma string' })
  nome: string;

  @IsOptional()
  @IsString({ message: 'Descrição deve ser uma string' })
  descricao?: string;

  @IsNotEmpty({ message: 'Preço é obrigatório' })
  @IsNumber({}, { message: 'Preço deve ser um número' })
  @Min(0, { message: 'Preço deve ser maior ou igual a 0' })
  preco: number;

  @IsNotEmpty({ message: 'Estoque é obrigatório' })
  @IsNumber({}, { message: 'Estoque deve ser um número' })
  @Min(0, { message: 'Estoque deve ser maior ou igual a 0' })
  estoque: number;

  @IsNotEmpty({ message: 'ID da categoria é obrigatório' })
  @IsUUID('4', { message: 'ID da categoria deve ser um UUID válido' })
  categoriaId: string;

  @IsNotEmpty({ message: 'ID do vendedor é obrigatório' })
  @IsUUID('4', { message: 'ID do vendedor deve ser um UUID válido' })
  vendedorId: string;
}

export class UpdateProdutoDto {
  @IsOptional()
  @IsString({ message: 'Nome deve ser uma string' })
  nome?: string;

  @IsOptional()
  @IsString({ message: 'Descrição deve ser uma string' })
  descricao?: string;

  @IsOptional()
  @IsNumber({}, { message: 'Preço deve ser um número' })
  @Min(0, { message: 'Preço deve ser maior ou igual a 0' })
  preco?: number;

  @IsOptional()
  @IsNumber({}, { message: 'Estoque deve ser um número' })
  @Min(0, { message: 'Estoque deve ser maior ou igual a 0' })
  estoque?: number;

  @IsOptional()
  @IsUUID('4', { message: 'ID da categoria deve ser um UUID válido' })
  categoriaId?: string;

  @IsOptional()
  @IsUUID('4', { message: 'ID do vendedor deve ser um UUID válido' })
  vendedorId?: string;
}

export class ProdutoResponseDto {
  id: string;
  nome: string;
  descricao?: string;
  preco: number;
  estoque: number;
  categoriaId: string;
  vendedorId: string;
  createdAt: Date;
  updatedAt: Date;
}