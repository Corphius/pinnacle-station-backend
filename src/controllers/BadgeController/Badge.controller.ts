import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiAcceptedResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { BadgeService } from 'src/services/Badge.service';
import { BadgeREQUESTcreate } from './requests/Badge.create.request';
import { BadgeREQUESTlistWithFilters } from './requests/Badge.listwithfilters.request';
import { BadgeREQUESTupdate } from './requests/Badge.update.request';

@ApiTags('Badge')
@Controller('/badge')
@ApiBearerAuth()
class BadgeController {
  constructor(private badgeService: BadgeService) {}

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
  async create(@Body() body: BadgeREQUESTcreate) {
    return await this.badgeService.create(body);
  }

  @Put(':id')
  @ApiAcceptedResponse({
    description: 'Accepted',
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal Server Error',
  })
  @ApiNotFoundResponse({
    description: 'Not Found',
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
  })
  async updateEntityById(
    @Param('id') id: string,
    @Body() body: BadgeREQUESTupdate,
  ) {
    return await this.badgeService.update({ id, ...body });
  }

  @Get('/')
  @ApiOkResponse({
    description: 'OK',
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal Server Error',
  })
  @ApiNotFoundResponse({
    description: 'Not Found',
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
  })
  async getAllRegistersWithFilters(@Body() body: BadgeREQUESTlistWithFilters) {
    return await this.badgeService.getAllRegistersWithFilters(body);
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'OK',
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal Server Error',
  })
  @ApiNotFoundResponse({
    description: 'Not Found',
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
  })
  async getById(@Param('id') id: string) {
    return await this.badgeService.getById(id);
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'OK',
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal Server Error',
  })
  @ApiNotFoundResponse({
    description: 'Not Found',
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
  })
  async deleteById(@Param('id') id: string) {
    return await this.badgeService.deleteById(id);
  }
}

export { BadgeController };
