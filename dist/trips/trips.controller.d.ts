import { TripsService } from './trips.service';
import { CreateTripDto } from './dto/create-trip.dto';
import { UpdateTripDto } from './dto/update-trip.dto';
import { Trip } from '@prisma/client';
export declare class TripsController {
    private readonly tripsService;
    constructor(tripsService: TripsService);
    findAll(): Promise<Trip[]>;
    findOne(id: string): Promise<Trip | null>;
    create(createTripDto: CreateTripDto): Promise<Trip>;
    update(id: string, updateTripDto: UpdateTripDto): Promise<Trip>;
    remove(id: string): Promise<Trip>;
}
