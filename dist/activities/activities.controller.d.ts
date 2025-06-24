import { ActivitiesService } from './activities.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { Activity } from '@prisma/client';
export declare class ActivitiesController {
    private readonly activitiesService;
    constructor(activitiesService: ActivitiesService);
    findAll(): Promise<Activity[]>;
    findOne(id: string): Promise<Activity | null>;
    create(createDto: CreateActivityDto): Promise<Activity>;
    update(id: string, updateDto: UpdateActivityDto): Promise<Activity>;
    remove(id: string): Promise<Activity>;
}
