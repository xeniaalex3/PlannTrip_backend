import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

export interface JwtPayload {
  sub: number;
  email: string;
}

@Injectable()
export class AuthCheckService {
  constructor(private jwtService: JwtService) {}

  verifyToken(token: string) {
    try {
      // Vérifie si le token est valide
      const decoded = this.jwtService.verify<JwtPayload>(token);
      return {
        isValid: true,
        userData: decoded,
      };
    } catch (error) {
      console.error('error:', error);
      return {
        isValid: false,
        error: 'Invalid token',
      };
    }
  }
}
