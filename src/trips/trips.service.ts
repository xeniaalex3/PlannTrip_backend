import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Trip } from '@prisma/client';

@Injectable()
export class TripsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Trip[]> {
    return this.prisma.trip.findMany();
  }

  async findOne(id: number): Promise<Trip | null> {
    return this.prisma.trip.findUnique({
      where: { id },
    });
  }

  async create(data: Prisma.TripCreateInput): Promise<Trip> {
    return this.prisma.trip.create({ data });
  }

  async update(id: number, data: Prisma.TripUpdateInput): Promise<Trip> {
    return this.prisma.trip.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Trip> {
    return this.prisma.trip.delete({
      where: { id },
    });
  }
}
