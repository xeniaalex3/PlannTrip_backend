import { Trip } from 'src/trips/entities/trip.entity';

export class User {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  trips?: Trip[];
  createdAt?: Date;
  updatedAt?: Date;
}
