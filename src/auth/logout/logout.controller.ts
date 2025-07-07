import { Controller, Post, UseGuards } from '@nestjs/common';
import { LogoutService } from './logout.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('logout')
export class LogoutController {
  constructor(private readonly logoutService: LogoutService) {}

  @UseGuards(AuthGuard('jwt')) // assume you use jwt guard for authentication
  @Post()
  async logout() {
    return this.logoutService.logout();
  }
}
