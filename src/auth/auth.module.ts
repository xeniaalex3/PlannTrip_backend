import { Module } from '@nestjs/common';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LogoutService } from './logout/logout.service';
import { LogoutController } from './logout/logout.controller';
import { AuthRefreshService } from './auth-refresh/auth-refresh.service';
import { AuthRefreshController } from './auth-refresh/auth-refresh.controller';
import { AuthCheckController } from './auth-check/auth-check.controller';
import { AuthCheckService } from './auth-check/auth-check.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '1h' },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [
    LoginController,
    LogoutController,
    AuthRefreshController,
    AuthCheckController,
  ],
  providers: [
    LoginService,
    PrismaService,
    JwtStrategy,
    LogoutService,
    AuthRefreshService,
    AuthCheckService,
  ],
})
export class AuthModule {}
