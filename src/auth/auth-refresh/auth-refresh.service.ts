import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthRefreshService {
  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async refreshToken(oldToken: string) {
    let decoded;
    try {
      // Vérifie l'ancien token avec la clé secrète du refresh token
      decoded = this.jwtService.verify(oldToken, {
        secret: process.env.JWT_REFRESH_TOKEN,
      });
    } catch (error) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    try {
      // Vérifie si l'utilisateur existe toujours
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

      // Génère les nouveaux tokens
      const payload = {
        sub: user.id,
        email: user.email,
      };

      return {
        access_token: this.jwtService.sign(payload, { expiresIn: '1h' }),
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
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      throw new UnauthorizedException('Token refresh failed');
    }
  }
}
