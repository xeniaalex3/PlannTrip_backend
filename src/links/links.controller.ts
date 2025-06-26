import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LinksService } from './links.service';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
import { Prisma, Link } from '@prisma/client';

@Controller('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Get()
  async findAll(): Promise<Link[]> {
    return this.linksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Link | null> {
    return this.linksService.findOne(+id);
  }

  @Post()
  create(@Body() createLinkDto: CreateLinkDto): Promise<Link> {
    const data: Prisma.LinkCreateInput = {
      title: createLinkDto.title,
      url: createLinkDto.url,
      trip: { connect: { id: createLinkDto.trip_id } },
    };
    return this.linksService.create(data);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLinkDto: UpdateLinkDto,
  ): Promise<Link> {
    const data: Prisma.LinkUpdateInput = {
      title: updateLinkDto.title,
      url: updateLinkDto.url,
      trip: { connect: { id: updateLinkDto.trip_id } },
    };
    return this.linksService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Link> {
    return this.linksService.remove(+id);
  }
}
