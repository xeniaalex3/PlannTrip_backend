import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma, User } from '@prisma/client';
import { User as UserDto } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<Partial<User>[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
    @Body('req') req: UserDto,
  ): Promise<Partial<User | null>> {
    return this.userService.findOne(req, +id);
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<Partial<User>> {
    const passwordToHash: string = createUserDto.password;
    const hashedPassword = await bcrypt.hash(passwordToHash, 12);

    const data: Prisma.UserCreateInput = {
      firstname: createUserDto.firstname,
      lastname: createUserDto.lastname,
      email: createUserDto.email,
      password: hashedPassword,
    };

    return this.userService.create(data);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @Body('req') req: UserDto,
  ): Promise<Partial<User>> {
    const data: Prisma.UserUpdateInput = {
      firstname: updateUserDto.firstname,
      lastname: updateUserDto.lastname,
      email: updateUserDto.email,
    };
    return this.userService.update(+id, data, req);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<User> {
    return this.userService.remove(+id);
  }
}
