import {
  IsNotEmpty,
  IsString,
  IsDate,
  IsInt,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateActivityDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @Type(() => Date)
  @IsDate()
  occurs_at: Date;

  @IsString()
  time: string;

  @IsOptional()
  @IsInt()
  trip_id: number;
}
