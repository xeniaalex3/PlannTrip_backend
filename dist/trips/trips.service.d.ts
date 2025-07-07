import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Trip } from '@prisma/client';
export declare class TripsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<Trip[]>;
    findOne(id: number): Promise<Trip | null>;
    createFullTrip(data: {
        destination: string;
        starts_at: Date;
        ends_at: Date;
        participants: {
            name?: string;
            email: string;
            is_owner?: boolean;
        }[];
    }): Promise<Trip>;
    update(id: number, updateDto: Prisma.TripUpdateInput): Promise<Trip>;
    remove(id: number): Promise<Trip>;
}
