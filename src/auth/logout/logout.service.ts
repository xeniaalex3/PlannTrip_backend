import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class LogoutService {
  constructor(private prisma: PrismaService) {}

  async logout() {
    return { message: 'Déconnexion réussie' };
  }
}
