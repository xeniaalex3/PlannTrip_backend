import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { LogoutService } from './logout.service';
import { JwtAuthGuard } from '../guards/jwt.guard';

type AuthenticatedRequest = Request & { user?: { sub: number } };

@Controller('logout')
export class LogoutController {
  constructor(private readonly logoutService: LogoutService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async logout(@Req() req: AuthenticatedRequest) {
    return await this.logoutService.logout(req.user?.sub);
  }
}
