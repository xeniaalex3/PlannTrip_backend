import { IsString, IsDate, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateTripDto {
  @IsString()
  destination: string;

  @Type(() => Date)
  @IsDate()
  starts_at: Date;

  @Type(() => Date)
  @IsDate()
  ends_at: Date;

  @IsBoolean()
  is_confirmed: boolean;
}
