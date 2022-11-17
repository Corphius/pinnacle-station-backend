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
import { BadgeOnTutorialDTO } from 'src/dtos/BadgeOnTutorial/BadgeOnTutorial.dto';
import { TutorialService } from 'src/services/Tutorial.service';
import { TutorialREQUESTCreate } from './request/Tutorial.create.request';
import { TutorialREQUESTlistWithFilters } from './request/Tutorial.listwithfilters.request';
import { TutorialREQUESTUpdate } from './request/Tutorial.update.request';

@ApiTags('Tutorial')
@Controller('/tutorial')
class TutorialController {
  constructor(private tutorialService: TutorialService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() body: TutorialREQUESTCreate) {
    return await this.tutorialService.create(body);
  }

  @Put(':id')
  async updateEntityById(
    @Param('id') id: string,
    @Body() body: TutorialREQUESTUpdate,
  ) {
    return await this.tutorialService.update({ id, ...body });
  }

  @Get('/')
  async getAllRegistersWithFilters(
    @Body() body: TutorialREQUESTlistWithFilters,
  ) {
    return await this.tutorialService.getAllRegistersWithFilters(body);
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.tutorialService.getById(id);
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    return await this.tutorialService.deleteById(id);
  }

  @Post('/badge')
  @HttpCode(201)
  async createBadge(@Body() body: BadgeOnTutorialDTO) {
    return await this.tutorialService.badgeForTutorial(body);
  }
}

export { TutorialController };
