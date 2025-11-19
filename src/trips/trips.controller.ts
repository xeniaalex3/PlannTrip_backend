import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TripsService } from './trips.service';
import { CreateTripDto } from './dto/create-trip.dto';
import { Prisma, Trip } from '@prisma/client';

@Controller('trips')
export class TripsController {
  constructor(private readonly tripsService: TripsService) {}

  @Get()
  async findAll(): Promise<Trip[]> {
    return this.tripsService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Trip | null> {
    return this.tripsService.findOne(+id);
  }

  @Post()
  async create(@Body() dto: CreateTripDto): Promise<Trip> {
    const data: Prisma.TripCreateInput = {
      destination: dto.destination,
      starts_at: dto.starts_at,
      ends_at: dto.ends_at,
      is_confirmed: dto.is_confirmed ?? false,

      user: {
        connect: { id: dto.user_id },
      },

      participants: dto.participants ? { create: dto.participants } : undefined,
    };

    return this.tripsService.create(data);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTripDto: Prisma.TripUpdateInput,
  ): Promise<Trip> {
    return this.tripsService.update(+id, updateTripDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Trip> {
    return this.tripsService.remove(+id);
  }
}
