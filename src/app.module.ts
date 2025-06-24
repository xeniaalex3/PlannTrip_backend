import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TripsModule } from './trips/trips.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [TripsModule, PrismaModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
