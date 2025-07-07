import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TripsModule } from './trips/trips.module';
import { PrismaModule } from './prisma/prisma.module';
import { AppController } from './app.controller';
import { ActivitiesModule } from './activities/activities.module';
import { LinksModule } from './links/links.module';
import { ParticipantsModule } from './participants/participants.module';

@Module({
  imports: [
    TripsModule,
    PrismaModule,
    ActivitiesModule,
    LinksModule,
    ParticipantsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
