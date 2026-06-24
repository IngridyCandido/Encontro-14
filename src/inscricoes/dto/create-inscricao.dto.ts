import {
  IsArray,
  ArrayNotEmpty,
  IsBoolean,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

import { Transform, Type } from 'class-transformer';

export class CreateInscricaoDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsEmail()
  email: string;

  @Type(() => Number)
  @IsInt()
  @Min(16)
  idade: number;

  @Transform(({ value }) => value === true || value === 'true')
  @IsBoolean()
  aceitaTermos: boolean;

  @Transform(({ value }: { value: unknown }) => {
    if (Array.isArray(value)) {
      return value.map((item) => String(item));
    }

    if (typeof value === 'string') {
      return [value];
    }

    return [];
  })
  @IsArray()
  @ArrayNotEmpty()
  interesses: string[];

  @IsOptional()
  @IsString()
  observacoes?: string;
}
