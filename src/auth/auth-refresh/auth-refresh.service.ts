import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';

// Type de charge utile du token d'actualisation
interface RefreshTokenPayload {
  sub: number;
  iat?: number;
  exp?: number;
}

// Type de charge utile du token d'accès
interface AccessTokenPayload {
  sub: number;
  email: string;
}

@Injectable()
export class AuthRefreshService {
  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async refreshToken(oldToken: string) {
    let decoded: RefreshTokenPayload;

    try {
      // Vérifiez et saisissez le token d'actualisation
      decoded = this.jwtService.verify<RefreshTokenPayload>(oldToken, {
        secret: process.env.JWT_REFRESH_TOKEN,
      });
    } catch (error) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    // Vérifie l'existence de l'utilisateur
    const user = await this.prisma.user.findUnique({
      where: { id: decoded.sub },
      select: {
        id: true,
        email: true,
        firstname: true,
        lastname: true,
      },
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const accessPayload: AccessTokenPayload = {
      sub: user.id,
      email: user.email,
    };

    // Génération de nouveaux token
    return {
      access_token: this.jwtService.sign(accessPayload, {
        expiresIn: '1h',
      }),

      refresh_token: this.jwtService.sign(
        { sub: user.id },
        {
          secret: process.env.JWT_REFRESH_TOKEN || 'refresh_token',
          expiresIn: '6h',
        },
      ),

      user: {
        id: user.id,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
      },
    };
  }
}
