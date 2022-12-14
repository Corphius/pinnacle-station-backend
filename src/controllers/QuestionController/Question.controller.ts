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
import { QuestionService } from 'src/services/Question.service';
import { QuestionREQUESTCreate } from './requests/Question.create.request';
import { QuestionREQUESTlistWithFilters } from './requests/Question.liswithfilters.request';
import { QuestionREQUESTupdate } from './requests/Question.update.request';

@ApiTags('Question')
@Controller('/question')
@ApiBearerAuth()
class QuestionController {
  constructor(private questionService: QuestionService) {}

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
  async create(@Body() body: QuestionREQUESTCreate) {
    return await this.questionService.create(body);
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
    @Body() body: QuestionREQUESTupdate,
  ) {
    return await this.questionService.update({ id, ...body });
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
    @Body() body: QuestionREQUESTlistWithFilters,
  ) {
    return await this.questionService.getAllRegistersWithFilters(body);
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
    return await this.questionService.getById(id);
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
    return await this.questionService.deleteById(id);
  }
}

export { QuestionController };
