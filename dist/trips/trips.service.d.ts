import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Trip } from '@prisma/client';
export declare class TripsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<Trip[]>;
    findOne(id: number): Promise<Trip | null>;
    create(data: Prisma.TripCreateInput): Promise<Trip>;
    update(id: number, data: Prisma.TripUpdateInput): Promise<Trip>;
    remove(id: number): Promise<Trip>;
}
