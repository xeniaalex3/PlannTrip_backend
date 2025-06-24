import { Module } from '@nestjs/common';
import { TripsService } from './trips.service';
import { TripsController } from './trips.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [TripsController],
  providers: [TripsService],
  imports: [PrismaModule],
})
export class TripsModule {}
