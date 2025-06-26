import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Link } from '@prisma/client';

@Injectable()
export class LinksService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Link[]> {
    return this.prisma.link.findMany();
  }

  async findOne(id: number): Promise<Link | null> {
    return this.prisma.link.findUnique({
      where: { id },
    });
  }

  async create(data: Prisma.LinkCreateInput): Promise<Link> {
    return this.prisma.link.create({ data });
  }

  async update(id: number, data: Prisma.LinkUpdateInput): Promise<Link> {
    return this.prisma.link.update({
      where: { id },
      data,
    });
  }

  remove(id: number): Promise<Link> {
    return this.prisma.link.delete({
      where: { id },
    });
  }
}
