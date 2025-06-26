import { Trip } from 'src/trips/entities/trip.entity';

export class Link {
  id: number;
  title: string;
  url: string;
  trip_id: string;
  trips: Trip;
}
