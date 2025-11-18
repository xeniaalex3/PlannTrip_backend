import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TripsModule } from './trips/trips.module';
import { PrismaModule } from './prisma/prisma.module';
import { AppController } from './app.controller';
import { ActivitiesModule } from './activities/activities.module';
import { LinksModule } from './links/links.module';
import { ParticipantsModule } from './participants/participants.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { auth } from './lib/auth';
import { AuthModule } from '@thallesp/nestjs-better-auth';

@Module({
  imports: [
    TripsModule,
    PrismaModule,
    ActivitiesModule,
    LinksModule,
    ParticipantsModule,
    UserModule,
    AuthModule.forRoot(auth),
  ],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
