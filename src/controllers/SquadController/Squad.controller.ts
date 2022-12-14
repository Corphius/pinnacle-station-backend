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
import { SquadService } from 'src/services/Squad.service';
import { SquadREQUESTCreate } from './requests/Squad.create.request';
import { SquadREQUESTlistWithFilters } from './requests/Squad.listwithfilters.request';
import { SquadREQUESTUpdate } from './requests/Squad.update.request';

@ApiTags('Squad')
@Controller('/squad')
@ApiBearerAuth()
class SquadController {
  constructor(private squadService: SquadService) {}

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
  async create(@Body() body: SquadREQUESTCreate) {
    return await this.squadService.create(body);
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
    @Body() body: SquadREQUESTUpdate,
  ) {
    return await this.squadService.update({ id, ...body });
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
  async getAllRegistersWithFilters(@Body() body: SquadREQUESTlistWithFilters) {
    return await this.squadService.getAllRegistersWithFilters(body);
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
    return await this.squadService.getById(id);
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
    return await this.squadService.deleteById(id);
  }
}

export { SquadController };
