import { Trip } from 'src/trips/entities/trip.entity';
export declare class Activity {
    id: number;
    title: string;
    occurs_at: Date;
    time: string;
    trip_id: number;
    trips: Trip;
}
