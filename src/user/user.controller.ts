import { Controller, Get, Put, Delete, Param, Req, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  public async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: string, @Req() req) {
    return this.userService.findOne(+id, req);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
