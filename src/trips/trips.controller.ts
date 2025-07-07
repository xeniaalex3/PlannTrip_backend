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
import { Trip } from '@prisma/client';

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
    return this.tripsService.createFullTrip({
      destination: dto.destination,
      starts_at: new Date(dto.starts_at),
      ends_at: new Date(dto.ends_at),
      participants: dto.participants,
    });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTripDto: Partial<Trip>,
  ): Promise<Trip> {
    return this.tripsService.update(+id, updateTripDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Trip> {
    return this.tripsService.remove(+id);
  }
}
