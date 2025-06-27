import { Trip } from 'src/trips/entities/trip.entity';

export class Participant {
  id: number;
  name: string;
  email: string;
  is_confirmed: boolean;
  is_owner: boolean;
  trip_id: number;
  trips: Trip;
}
