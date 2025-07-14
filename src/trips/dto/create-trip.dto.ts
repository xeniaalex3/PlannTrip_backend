import {
  IsString,
  IsDateString,
  IsBoolean,
  ValidateNested,
  IsOptional,
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
}

export class CreateTripDto {
  @IsString()
  destination: string;

  @IsDateString()
  starts_at: string;

  @IsDateString()
  ends_at: string;

  @IsBoolean()
  is_confirmed: boolean;

  @ValidateNested({ each: true })
  @Type(() => CreateParticipantNestedDto)
  participants: CreateParticipantNestedDto[];
}
