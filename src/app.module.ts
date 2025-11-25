import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TripsModule } from './trips/trips.module';
import { PrismaModule } from './prisma/prisma.module';
import { AppController } from './app.controller';
import { ActivitiesModule } from './activities/activities.module';
import { LinksModule } from './links/links.module';
import { ParticipantsModule } from './participants/participants.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { RegisterModule } from './register/register.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TripsModule,
    PrismaModule,
    ActivitiesModule,
    LinksModule,
    ParticipantsModule,
    UserModule,
    AuthModule,
    RegisterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
