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
import { ActivityService } from 'src/services/Activity.service';
import {
  ActivityREQUESTCreate,
  ActivityREQUESTUpdate,
} from './Activity.request';

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
  async getAllRegistersWithFilters(@Body() body: ActivityREQUESTCreate) {
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
}

export { ActivityController };
