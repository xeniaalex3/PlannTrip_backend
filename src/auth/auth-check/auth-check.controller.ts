import {
  Controller,
  Post,
  Headers,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthCheckService } from './auth-check.service';

@Controller('auth-check')
export class AuthCheckController {
  constructor(private readonly authCheckService: AuthCheckService) {}

  @Post()
  async authCheck(@Headers('authorization') authHeader: string) {
    if (!authHeader) {
      throw new UnauthorizedException('No token provided');
    }

    // Extrait le token du header (format: "Bearer <token>")
    const token = authHeader.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException('Invalid token format');
    }

    const result = this.authCheckService.verifyToken(token);

    if (!result.isValid) {
      throw new UnauthorizedException(result.error);
    }

    return {
      isValid: true,
      user: result.userData,
    };
  }
}
