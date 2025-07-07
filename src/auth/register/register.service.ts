import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { RegisterDto } from '../dto/register.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class RegisterService {
  constructor(private prisma: PrismaService) {}

  async register(registerDto: RegisterDto) {
    // Vérifier si l'email existe déjà
    const existingUser = await this.prisma.user.findUnique({
      where: { email: registerDto.email },
    });

    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    // Hash du mot de passe
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);

    // Création de l'utilisateur
    const user = await this.prisma.user.create({
      data: {
        ...registerDto,
        password: hashedPassword,
      },
    });

    // On retourne l'utilisateur sans le mot de passe
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = user;
    return result;
  }
}
