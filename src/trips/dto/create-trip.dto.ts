import {
  IsString,
  IsDateString,
  IsBoolean,
  ValidateNested,
  IsOptional,
  IsNumber,
} from 'class-validator';
import { Type } from 'class-transformer';

class CreateParticipantNestedDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsString()
  email: string;

  @IsOptional()
  @IsBoolean()
  is_owner?: boolean;

  @IsOptional()
  @IsBoolean()
  is_confirmed?: boolean;
}

export class CreateTripDto {
  @IsNumber()
  user_id: number;

  @IsString()
  destination: string;

  @IsDateString()
  starts_at: string;

  @IsDateString()
  ends_at: string;

  @IsOptional()
  @IsBoolean()
  is_confirmed?: boolean;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateParticipantNestedDto)
  participants?: CreateParticipantNestedDto[];
}
