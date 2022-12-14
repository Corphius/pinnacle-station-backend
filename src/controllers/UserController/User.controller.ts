import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { UserService } from 'src/services/User.service';
import { UserREQUESTcreate } from './requests/User.create.request';
import { UserREQUESTemail } from './requests/User.email.request';

@ApiTags('User')
@Controller('user')
@ApiBearerAuth()
class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(201)
  @ApiCreatedResponse({
    description: 'Created',
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal Server Error',
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
  })
  async create(@Body() body: UserREQUESTcreate) {
    return await this.userService.create(body);
  }

  @Get('/email')
  @ApiOkResponse({
    description: 'OK',
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal Server Error',
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
  })
  @ApiNotFoundResponse({
    description: 'Not Found',
  })
  async getByEmail(@Body() email: UserREQUESTemail) {
    return await this.userService.findUserByEmail(email);
  }
  @Get(':id')
  @ApiOkResponse({
    description: 'OK',
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal Server Error',
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
  })
  @ApiNotFoundResponse({
    description: 'Not Found',
  })
  async getById(@Param('id') id: string) {
    return await this.userService.findUserById(id);
  }
}

export { UserController };
