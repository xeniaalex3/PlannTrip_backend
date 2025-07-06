import { Participant } from 'src/participants/entities/participant.entity';
import { Trip } from 'src/trips/entities/trip.entity';

export class User {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  trips?: Trip[];
  participants?: Participant[];
}
