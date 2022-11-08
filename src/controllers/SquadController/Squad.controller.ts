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
import { SquadService } from 'src/services/Squad.service';
import { SquadREQUESTCreate, SquadREQUESTUpdate } from './Squad.request';

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
  async getAllRegistersWithFilters(@Body() body: SquadREQUESTCreate) {
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
