import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  public async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany({
      include: {
        trips: true,
      },
    });
  }

  public async findOne(id: number, req: any): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    if (!req.user || req.user.id !== user.id) {
      throw new ForbiddenException(`You can only access your own data`);
    }

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    return await this.prisma.user.update({
      where: { id },
      data: {
        ...updateUserDto,
      },
    });
  }

  public async remove(id: number): Promise<User> {
    return await this.prisma.user.delete({ where: { id } });
  }
}
