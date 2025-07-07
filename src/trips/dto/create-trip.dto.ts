import {
  IsString,
  IsDate,
  IsBoolean,
  IsArray,
  ArrayMinSize,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateParticipantDto } from 'src/participants/dto/create-participant.dto';

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

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => CreateParticipantDto)
  participants: CreateParticipantDto[];
}
