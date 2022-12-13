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
import { BadgeOnTutorialDTO } from 'src/dtos/BadgeOnTutorial/BadgeOnTutorial.dto';
import { TutorialService } from 'src/services/Tutorial.service';
import { TutorialREQUESTbadge } from './request/Tutorial.badge.request';
import { TutorialREQUESTCreate } from './request/Tutorial.create.request';
import { TutorialREQUESTlistWithFilters } from './request/Tutorial.listwithfilters.request';
import { TutorialREQUESTUpdate } from './request/Tutorial.update.request';

@ApiTags('Tutorial')
@Controller('/tutorial')
@ApiBearerAuth()
class TutorialController {
  constructor(private tutorialService: TutorialService) {}

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
  async create(@Body() body: TutorialREQUESTCreate) {
    return await this.tutorialService.create(body);
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
    @Body() body: TutorialREQUESTUpdate,
  ) {
    return await this.tutorialService.update({ id, ...body });
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
    @Body() body: TutorialREQUESTlistWithFilters,
  ) {
    return await this.tutorialService.getAllRegistersWithFilters(body);
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
    return await this.tutorialService.getById(id);
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
    return await this.tutorialService.deleteById(id);
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
  async createBadge(@Body() body: TutorialREQUESTbadge) {
    return await this.tutorialService.badgeForTutorial(body);
  }
}

export { TutorialController };
