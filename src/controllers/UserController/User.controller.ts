import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { UserService } from 'src/services/User.service';
import { UserREQUESTcreate } from './requests/User.create.request';
import { UserREQUESTemail } from './requests/User.email.request';

@Controller('user')
class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() body: UserREQUESTcreate) {
    return await this.userService.create(body);
  }

  @Get('/email')
  async getByEmail(@Body() email: UserREQUESTemail) {
    return await this.userService.findUserByEmail(email);
  }
  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.userService.findUserById(id);
  }
}

export { UserController };
