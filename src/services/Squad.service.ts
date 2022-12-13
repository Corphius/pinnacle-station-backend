import { Inject, Injectable } from '@nestjs/common';
import { SquadCreateDTO } from 'src/dtos/Squad/Squad.create.dto';
import { SquadUpdateDTO } from 'src/dtos/Squad/Squad.update.dto';
import { GenericException } from 'src/exceptions/ErrorImplements/Generic.exception';
import { NotFoundException } from 'src/exceptions/ErrorImplements/NotFound.execption';
import { ServiceException } from 'src/exceptions/ErrorImplements/Service.exception';

import { ISquadRepository } from 'src/repositories/SquadRepository/Squad.interface.repository';
import { IserviceCRUD } from './serviceContract/service.crud.interface';
import { createSquadDTOforModel } from './servicesMappers/Squad.mapper';

@Injectable()
class SquadService implements IserviceCRUD {
  SERVICE_NAME = 'SQUAD_SERVICE';

  constructor(
    @Inject('ISquadRepository') private squadRepository: ISquadRepository,
  ) {}

  async create(squadCreateDTO: SquadCreateDTO) {
    try {
      return await this.squadRepository.create(
        createSquadDTOforModel(squadCreateDTO),
      );
    } catch (error) {
      console.log(error);
      if (error instanceof GenericException) throw error;
      throw new ServiceException(this.SERVICE_NAME);
    }
  }

  async update(squadUpdateDTO: SquadUpdateDTO) {
    try {
      return await this.squadRepository.updateById(
        squadUpdateDTO.id,
        squadUpdateDTO,
      );
    } catch (error) {
      console.log(error);
      if (error instanceof GenericException) throw error;
      throw new ServiceException(this.SERVICE_NAME);
    }
  }

  async getAllRegistersWithFilters(filters: object) {
    try {
      return await this.squadRepository.getAllRegisters(filters);
    } catch (error) {
      console.log(error);
      if (error instanceof GenericException) throw error;
      throw new ServiceException(this.SERVICE_NAME);
    }
  }

  async getById(id: string) {
    try {
      const squad = await this.squadRepository.getById(id);

      if (!squad) {
        throw new NotFoundException(id);
      }
      return squad;
    } catch (error) {
      console.log(error);
      if (error instanceof GenericException) throw error;
      throw new ServiceException(this.SERVICE_NAME);
    }
  }

  async deleteById(id: string) {
    try {
      const squad = await this.getById(id);
      if (!squad) {
        throw new NotFoundException('not found squad!');
      } else {
        return await this.squadRepository.deleteById(id);
      }
    } catch (error) {
      console.log(error);
      if (error instanceof GenericException) throw error;
      throw new ServiceException(this.SERVICE_NAME);
    }
  }
}

export { SquadService };
