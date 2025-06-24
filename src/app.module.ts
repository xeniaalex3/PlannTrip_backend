import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TripsModule } from './trips/trips.module';
import { PrismaModule } from './prisma/prisma.module';
import { AppController } from './app.controller';

@Module({
  imports: [TripsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
