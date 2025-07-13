import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Trip } from '@prisma/client';

@Injectable()
export class TripsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Trip[]> {
    return this.prisma.trip.findMany({
      include: { participants: true },
    });
  }

  async findOne(id: number): Promise<Trip | null> {
    return this.prisma.trip.findUnique({
      where: { id },
      include: { participants: true, activities: true, links: true },
    });
  }

  async create(data: Prisma.TripCreateInput): Promise<Trip> {
    return this.prisma.trip.create({
      data,
      include: { participants: true },
    });
  }

  async update(id: number, updateDto: Prisma.TripUpdateInput): Promise<Trip> {
    return this.prisma.trip.update({
      where: { id },
      data: updateDto,
    });
  }

  async remove(id: number): Promise<Trip> {
    return this.prisma.trip.delete({
      where: { id },
    });
  }
}
