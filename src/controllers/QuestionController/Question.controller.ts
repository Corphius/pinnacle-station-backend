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
import { QuestionService } from 'src/services/Question.service';
import { QuestionREQUESTCreate } from './requests/Question.create.request';
import { QuestionREQUESTlistWithFilters } from './requests/Question.liswithfilters.request';
import { QuestionREQUESTupdate } from './requests/Question.update.request';

@ApiTags('Question')
@Controller('/question')
class QuestionController {
  constructor(private questionService: QuestionService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() body: QuestionREQUESTCreate) {
    return await this.questionService.create(body);
  }

  @Put(':id')
  async updateEntityById(
    @Param('id') id: string,
    @Body() body: QuestionREQUESTupdate,
  ) {
    return await this.questionService.update({ id, ...body });
  }

  @Get('/')
  async getAllRegistersWithFilters(
    @Body() body: QuestionREQUESTlistWithFilters,
  ) {
    return await this.questionService.getAllRegistersWithFilters(body);
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.questionService.getById(id);
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    return await this.questionService.deleteById(id);
  }
}

export { QuestionController };
