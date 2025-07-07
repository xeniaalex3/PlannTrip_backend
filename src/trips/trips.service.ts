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

  async createFullTrip(data: {
    destination: string;
    starts_at: Date;
    ends_at: Date;
    participants: {
      name?: string;
      email: string;
      is_owner?: boolean;
    }[];
  }): Promise<Trip> {
    const { destination, starts_at, ends_at, participants } = data;

    const trip = await this.prisma.trip.create({
      data: {
        destination,
        starts_at,
        ends_at,
        participants: {
          createMany: {
            data: participants.map((p) => ({
              name: p.name,
              email: p.email,
              is_owner: p.is_owner ?? false,
              is_confirmed: p.is_owner === true,
            })),
          },
        },
      },
      include: { participants: true },
    });

    return trip;
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
