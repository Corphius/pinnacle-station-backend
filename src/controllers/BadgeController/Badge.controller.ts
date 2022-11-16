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
import { BadgeService } from 'src/services/Badge.service';
import { BadgeREQUESTcreate } from './requests/Badge.create.request';
import { BadgeREQUESTlistWithFilters } from './requests/Badge.listwithfilters.request';
import { BadgeREQUESTupdate } from './requests/Badge.update.request';

@ApiTags('Badge')
@Controller('/badge')
class BadgeController {
  constructor(private badgeService: BadgeService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() body: BadgeREQUESTcreate) {
    return await this.badgeService.create(body);
  }

  @Put(':id')
  async updateEntityById(
    @Param('id') id: string,
    @Body() body: BadgeREQUESTupdate,
  ) {
    return await this.badgeService.update({ id, ...body });
  }

  @Get('/')
  async getAllRegistersWithFilters(@Body() body: BadgeREQUESTlistWithFilters) {
    return await this.badgeService.getAllRegistersWithFilters(body);
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.badgeService.getById(id);
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    return await this.badgeService.deleteById(id);
  }
}

export { BadgeController };
