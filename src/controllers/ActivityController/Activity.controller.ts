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
import { ApiTags } from '@nestjs/swagger';
import { BadgeOnActivityDTO } from 'src/dtos/BadgeOnActivity/BadgeOnActivity.dto';
import { ActivityService } from 'src/services/Activity.service';
import { ActivityREQUESTCreate } from './request/Activity.create.request';
import { ActivityREQUESTUpdate } from './request/Activity.update.request';
import { ActivityREQUESTlistWithFilters } from './request/Activity.listwithfilters.request';

@ApiTags('Activity')
@Controller('/activity')
class ActivityController {
  constructor(private activityService: ActivityService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() body: ActivityREQUESTCreate) {
    return await this.activityService.create(body);
  }

  @Put(':id')
  async updateEntityById(
    @Param('id') id: string,
    @Body() body: ActivityREQUESTUpdate,
  ) {
    return await this.activityService.update({ id, ...body });
  }

  @Get('/')
  async getAllRegistersWithFilters(
    @Body() body: ActivityREQUESTlistWithFilters,
  ) {
    return await this.activityService.getAllRegistersWithFilters(body);
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.activityService.getById(id);
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    return await this.activityService.deleteById(id);
  }

  @Post('/badge')
  @HttpCode(201)
  async createBadge(@Body() body: BadgeOnActivityDTO) {
    return await this.activityService.badgeForTheActivity(body);
  }
}

export { ActivityController };
