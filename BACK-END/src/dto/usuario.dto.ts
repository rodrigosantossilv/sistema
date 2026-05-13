import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export type TipoUsuario = 'cliente' | 'vendedor' | 'admin';

export class CreateUsuarioDto {
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  @IsString({ message: 'Nome deve ser uma string' })
  nome: string;

  @IsNotEmpty({ message: 'Email é obrigatório' })
  @IsEmail({}, { message: 'Email deve ser válido' })
  email: string;

  @IsNotEmpty({ message: 'Senha é obrigatória' })
  @IsString({ message: 'Senha deve ser uma string' })
  @MinLength(6, { message: 'Senha deve ter pelo menos 6 caracteres' })
  senha: string;

  @IsNotEmpty({ message: 'Tipo é obrigatório' })
  @IsEnum(['cliente', 'vendedor', 'admin'], { message: 'Tipo deve ser cliente, vendedor ou admin' })
  tipo: TipoUsuario;

  @IsOptional()
  @IsString({ message: 'Telefone deve ser uma string' })
  telefone?: string;

  @IsOptional()
  @IsString({ message: 'CPF/CNPJ deve ser uma string' })
  cpfCnpj?: string;
}

export class UpdateUsuarioDto {
  @IsOptional()
  @IsString({ message: 'Nome deve ser uma string' })
  nome?: string;

  @IsOptional()
  @IsEmail({}, { message: 'Email deve ser válido' })
  email?: string;

  @IsOptional()
  @IsString({ message: 'Senha deve ser uma string' })
  @MinLength(6, { message: 'Senha deve ter pelo menos 6 caracteres' })
  senha?: string;

  @IsOptional()
  @IsEnum(['cliente', 'vendedor', 'admin'], { message: 'Tipo deve ser cliente, vendedor ou admin' })
  tipo?: TipoUsuario;

  @IsOptional()
  @IsString({ message: 'Telefone deve ser uma string' })
  telefone?: string;

  @IsOptional()
  @IsString({ message: 'CPF/CNPJ deve ser uma string' })
  cpfCnpj?: string;
}

export class UsuarioResponseDto {
  id: string;
  nome: string;
  email: string;
  tipo: TipoUsuario;
  telefone?: string;
  cpfCnpj?: string;
  criadoEm: Date;
  atualizadoEm: Date;
}