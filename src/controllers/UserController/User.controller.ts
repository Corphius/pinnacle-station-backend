import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { UserService } from 'src/services/User.service';
import { UserREQUESTcreate } from './requests/User.create.request';

@Controller('user')
class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() body: UserREQUESTcreate) {
    return await this.userService.create(body);
  }
}

export { UserController };
