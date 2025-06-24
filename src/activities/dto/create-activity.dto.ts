import { IsNotEmpty, IsString, IsDateString, IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateActivityDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @Type(() => Date)
  @IsDateString()
  occurs_at: Date;

  @IsInt()
  trip_id: number;
}
