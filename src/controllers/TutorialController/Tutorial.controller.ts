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
import { TutorialService } from 'src/services/Tutorial.service';
import {
  TutorialREQUESTCreate,
  TutorialREQUESTUpdate,
} from './Tutorial.request';

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
  async getAllRegistersWithFilters(@Body() body: TutorialREQUESTCreate) {
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
}

export { TutorialController };
