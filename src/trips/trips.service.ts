import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Trip } from '@prisma/client';

@Injectable()
export class TripsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Trip[]> {
    return this.prisma.trips.findMany();
  }

  async findOne(id: number): Promise<Trip | null> {
    return this.prisma.trips.findUnique({
      where: { id },
    });
  }

  async create(data: Prisma.TripCreateInput): Promise<Trip> {
    return this.prisma.trips.create({ data });
  }

  async update(id: number, data: Prisma.TripUpdateInput): Promise<Trip> {
    return this.prisma.trips.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Trip> {
    return this.prisma.trips.delete({
      where: { id },
    });
  }
}
