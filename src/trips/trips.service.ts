import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Trip } from '@prisma/client';

@Injectable()
export class TripsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Trip[]> {
    return this.prisma.trip.findMany({
      include: {
        participants: true,
        activities: true,
        links: true,
        user: true,
      },
    });
  }

  async findOne(id: number): Promise<Trip | null> {
    const trip = await this.prisma.trip.findUnique({
      where: { id },
      include: {
        participants: true,
        activities: true,
        links: true,
        user: true,
      },
    });

    if (!trip) {
      throw new NotFoundException(`Trip with ID ${id} not found`);
    }

    return trip;
  }

  async create(data: Prisma.TripCreateInput): Promise<Trip> {
    return this.prisma.trip.create({
      data,
      include: {
        participants: true,
        activities: true,
        links: true,
        user: true,
      },
    });
  }

  async update(id: number, updateDto: Prisma.TripUpdateInput): Promise<Trip> {
    return this.prisma.trip.update({
      where: { id },
      data: updateDto,
      include: {
        participants: true,
        activities: true,
        links: true,
        user: true,
      },
    });
  }

  async remove(id: number): Promise<Trip> {
    return this.prisma.trip.delete({
      where: { id },
      include: {
        participants: true,
        activities: true,
        links: true,
        user: true,
      },
    });
  }
}
