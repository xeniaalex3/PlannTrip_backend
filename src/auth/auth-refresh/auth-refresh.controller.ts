import {
  Post,
  Headers,
  UnauthorizedException,
  Controller,
} from '@nestjs/common';
import { AuthRefreshService } from './auth-refresh.service';

@Controller('auth-refresh')
export class AuthRefreshController {
  constructor(private readonly authRefreshService: AuthRefreshService) {}

  @Post()
  async refresh(@Headers('authorization') authHeader: string) {
    if (!authHeader) {
      throw new UnauthorizedException('No token provided');
    }

    // Extrait le token du header (format: "Bearer <token>")
    const token = authHeader.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException('Invalid token format');
    }

    return this.authRefreshService.refreshToken(token);
  }
}
