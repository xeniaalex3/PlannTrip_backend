import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Activity } from '@prisma/client';

@Injectable()
export class ActivitiesService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Activity[]> {
    return this.prisma.activity.findMany();
  }

  async findOne(id: number): Promise<Activity | null> {
    return this.prisma.activity.findUnique({
      where: { id },
    });
  }

  async create(data: Prisma.ActivityCreateInput): Promise<Activity> {
    return this.prisma.activity.create({ data });
  }

  async update(
    id: number,
    data: Prisma.ActivityUpdateInput,
  ): Promise<Activity> {
    return this.prisma.activity.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Activity> {
    return this.prisma.activity.delete({
      where: { id },
    });
  }
}
