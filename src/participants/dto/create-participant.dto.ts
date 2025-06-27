import { IsNotEmpty, IsString, IsInt, IsBoolean } from 'class-validator';

export class CreateParticipantDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsBoolean()
  is_confirmed: boolean;

  @IsBoolean()
  is_owner: boolean;

  @IsInt()
  trip_id: number;
}
