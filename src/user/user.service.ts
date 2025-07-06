import {
  Injectable,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, User } from '@prisma/client';
import { User as UserDto } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Partial<User>[]> {
    const users = await this.prisma.user.findMany();

    return users.map((user) => this.sanitizeUser(user));
  }

  async findOne(req: UserDto, id: number): Promise<Partial<User | null>> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    if (req.id !== user.id) {
      throw new ForbiddenException('You can only access your own data');
    }

    return this.sanitizeUser(user);
  }

  async create(data: Prisma.UserCreateInput): Promise<Partial<User>> {
    const user = await this.prisma.user.create({ data });
    return this.sanitizeUser(user);
  }

  async update(
    id: number,
    data: Prisma.UserUpdateInput,
    req: UserDto,
  ): Promise<Partial<User>> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    if (req.id !== user.id) {
      throw new ForbiddenException('You can only update your own data');
    }

    const updated = await this.prisma.user.update({
      where: { id },
      data,
    });

    return this.sanitizeUser(updated);
  }

  async remove(id: number): Promise<User> {
    return this.prisma.user.delete({
      where: { id },
    });
  }

  private sanitizeUser(user: User): Partial<User> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...safeData } = user;
    return safeData;
  }
}
