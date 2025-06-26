import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateLinkDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  url: string;

  @IsInt()
  trip_id: number;
}
