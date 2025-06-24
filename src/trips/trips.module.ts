import { Module } from '@nestjs/common';
import { TripsService } from './trips.service';
import { TripsController } from './trips.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [TripsController],
  providers: [TripsService],
  imports: [PrismaService],
})
export class TripsModule {}
