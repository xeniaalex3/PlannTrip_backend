import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ParticipantsService } from './participants.service';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';
import { Prisma, Participant } from '@prisma/client';

@Controller('participants')
export class ParticipantsController {
  constructor(private readonly participantsService: ParticipantsService) {}

  @Get()
  async findAll(): Promise<Participant[]> {
    return this.participantsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Participant | null> {
    return this.participantsService.findOne(+id);
  }

  @Post()
  create(
    @Body() createParticipantDto: CreateParticipantDto,
  ): Promise<Participant> {
    const data: Prisma.ParticipantCreateInput = {
      name: createParticipantDto.name,
      email: createParticipantDto.email,
      is_confirmed: createParticipantDto.is_confirmed,
      is_owner: createParticipantDto.is_owner,
      trip: { connect: { id: createParticipantDto.trip_id } },
    };
    return this.participantsService.create(data);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateParticipantDto: UpdateParticipantDto,
  ): Promise<Participant> {
    const data: Prisma.ParticipantUpdateInput = {
      name: updateParticipantDto.name,
      email: updateParticipantDto.email,
      is_confirmed: updateParticipantDto.is_confirmed,
      is_owner: updateParticipantDto.is_owner,
      trip: { connect: { id: updateParticipantDto.trip_id } },
    };
    return this.participantsService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Participant> {
    return this.participantsService.remove(+id);
  }
}
