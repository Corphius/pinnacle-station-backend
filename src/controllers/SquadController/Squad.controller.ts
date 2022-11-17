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
import { SquadService } from 'src/services/Squad.service';
import { SquadREQUESTCreate } from './requests/Squad.create.request';
import { SquadREQUESTlistWithFilters } from './requests/Squad.listwithfilters.request';
import { SquadREQUESTUpdate } from './requests/Squad.update.request';

@ApiTags('Squad')
@Controller('/squad')
class SquadController {
  constructor(private squadService: SquadService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() body: SquadREQUESTCreate) {
    return await this.squadService.create(body);
  }

  @Put(':id')
  async updateEntityById(
    @Param('id') id: string,
    @Body() body: SquadREQUESTUpdate,
  ) {
    return await this.squadService.update({ id, ...body });
  }

  @Get('/')
  async getAllRegistersWithFilters(@Body() body: SquadREQUESTlistWithFilters) {
    return await this.squadService.getAllRegistersWithFilters(body);
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.squadService.getById(id);
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    return await this.squadService.deleteById(id);
  }
}

export { SquadController };
