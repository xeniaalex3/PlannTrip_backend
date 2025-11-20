import { Injectable } from '@nestjs/common';

@Injectable()
export class LogoutService {
  async logout(userId?: number) {
    if (userId) {
      // TODO: Révoquer les refresh tokens associés à l'utilisateur lorsqu'ils sont stockés
    }
    return { message: 'Déconnexion réussie' };
  }
}
