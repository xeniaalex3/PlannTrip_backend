import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [LoginController],
  providers: [LoginService, PrismaService],
  imports: [LoginModule],
})
export class AuthModule {}
