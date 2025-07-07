import { CreateParticipantDto } from 'src/participants/dto/create-participant.dto';
export declare class CreateTripDto {
    destination: string;
    starts_at: Date;
    ends_at: Date;
    is_confirmed: boolean;
    participants: CreateParticipantDto[];
}
