import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Activity } from '@prisma/client';
export declare class ActivitiesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<Activity[]>;
    findOne(id: number): Promise<Activity | null>;
    create(data: Prisma.ActivityCreateInput): Promise<Activity>;
    update(id: number, data: Prisma.ActivityUpdateInput): Promise<Activity>;
    remove(id: number): Promise<Activity>;
}
