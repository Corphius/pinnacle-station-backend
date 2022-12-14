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
import { BadgeOnActivityDTO } from 'src/dtos/BadgeOnActivity/BadgeOnActivity.dto';
import { ActivityService } from 'src/services/Activity.service';
import { ActivityREQUESTCreate } from './request/Activity.create.request';
import { ActivityREQUESTUpdate } from './request/Activity.update.request';
import { ActivityREQUESTlistWithFilters } from './request/Activity.listwithfilters.request';
import { ActivityREQUESTbadge } from './request/Activity.badge.request';

@ApiTags('Activity')
@Controller('/activity')
@ApiBearerAuth()
class ActivityController {
  constructor(private activityService: ActivityService) {}

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
  async create(@Body() body: ActivityREQUESTCreate) {
    return await this.activityService.create(body);
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
    @Body() body: ActivityREQUESTUpdate,
  ) {
    return await this.activityService.update({ id, ...body });
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
  async getAllRegistersWithFilters(
    @Body() body: ActivityREQUESTlistWithFilters,
  ) {
    return await this.activityService.getAllRegistersWithFilters(body);
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
    return await this.activityService.getById(id);
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
    return await this.activityService.deleteById(id);
  }

  @Post('/badge')
  @HttpCode(201)
  @ApiCreatedResponse({
    description: 'Created',
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal Server Error',
  })
  @ApiNotFoundResponse({
    description: 'Not Found',
  })
  async createBadge(@Body() body: ActivityREQUESTbadge) {
    return await this.activityService.badgeForTheActivity(body);
  }
}

export { ActivityController };
