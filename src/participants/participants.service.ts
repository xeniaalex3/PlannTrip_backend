import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Participant } from '@prisma/client';

@Injectable()
export class ParticipantsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Participant[]> {
    return this.prisma.participant.findMany();
  }

  async findOne(id: number): Promise<Participant | null> {
    return this.prisma.participant.findUnique({
      where: { id },
    });
  }

  async create(data: Prisma.ParticipantCreateInput): Promise<Participant> {
    return this.prisma.participant.create({ data });
  }

  async update(
    id: number,
    data: Prisma.ParticipantUpdateInput,
  ): Promise<Participant> {
    return this.prisma.participant.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Participant> {
    return this.prisma.participant.delete({
      where: { id },
    });
  }
}
