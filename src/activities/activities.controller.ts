import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { Prisma, Activity } from '@prisma/client';

@Controller('activities')
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) {}

  @Get()
  async findAll(): Promise<Activity[]> {
    return this.activitiesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Activity | null> {
    return this.activitiesService.findOne(+id);
  }

  @Post()
  async create(@Body() createDto: CreateActivityDto): Promise<Activity> {
    const data: Prisma.ActivityCreateInput = {
      title: createDto.title,
      occurs_at: createDto.occurs_at,
      time: createDto.time,
      trip: { connect: { id: createDto.trip_id } },
    };
    return this.activitiesService.create(data);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateActivityDto,
  ): Promise<Activity> {
    const data: Prisma.ActivityUpdateInput = {
      title: updateDto.title,
      occurs_at: updateDto.occurs_at,
      time: updateDto.time,
      trip: { connect: { id: updateDto.trip_id } },
    };
    return this.activitiesService.update(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Activity> {
    return this.activitiesService.remove(+id);
  }
}
