import { TripsService } from './trips.service';
import { CreateTripDto } from './dto/create-trip.dto';
import { Trip } from '@prisma/client';
export declare class TripsController {
    private readonly tripsService;
    constructor(tripsService: TripsService);
    findAll(): Promise<Trip[]>;
    findOne(id: string): Promise<Trip | null>;
    create(dto: CreateTripDto): Promise<Trip>;
    update(id: string, updateTripDto: Partial<Trip>): Promise<Trip>;
    remove(id: string): Promise<Trip>;
}
