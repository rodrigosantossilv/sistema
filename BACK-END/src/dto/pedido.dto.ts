import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsUUID, Min } from 'class-validator';

export type StatusPedido = 'pendente' | 'pago' | 'enviado' | 'finalizado' | 'cancelado';

export class CreatePedidoDto {
  @IsNotEmpty({ message: 'ID do usuário é obrigatório' })
  @IsUUID('4', { message: 'ID do usuário deve ser um UUID válido' })
  usuarioId: string;

  @IsOptional()
  @IsUUID('4', { message: 'ID do endereço deve ser um UUID válido' })
  enderecoId?: string;

  @IsOptional()
  @IsNumber({}, { message: 'Valor total deve ser um número' })
  @Min(0, { message: 'Valor total deve ser maior ou igual a 0' })
  total?: number;

  @IsOptional()
  @IsEnum(['pendente', 'pago', 'enviado', 'finalizado', 'cancelado'], { message: 'Status deve ser pendente, pago, enviado, finalizado ou cancelado' })
  status?: StatusPedido;
}

export class UpdatePedidoDto {
  @IsOptional()
  @IsUUID('4', { message: 'ID do endereço deve ser um UUID válido' })
  enderecoId?: string;

  @IsOptional()
  @IsNumber({}, { message: 'Valor total deve ser um número' })
  @Min(0, { message: 'Valor total deve ser maior ou igual a 0' })
  total?: number;

  @IsOptional()
  @IsEnum(['pendente', 'pago', 'enviado', 'finalizado', 'cancelado'], { message: 'Status deve ser pendente, pago, enviado, finalizado ou cancelado' })
  status?: StatusPedido;
}

export class PedidoResponseDto {
  id: string;
  usuarioId: string;
  enderecoId?: string;
  total: number;
  status: StatusPedido;
  criadoEm: Date;
}