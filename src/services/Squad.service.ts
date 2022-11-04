import { Inject, Injectable } from '@nestjs/common';
import { SquadCreateDTO } from 'src/dtos/Squad/Squad.create.dto';
import { GenericException } from 'src/exceptions/Generic.exception';
import { ServiceException } from 'src/exceptions/Service.exception';
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
      // fazer validações.
      return await this.squadRepository.create(
        createSquadDTOforModel(squadCreateDTO),
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
        throw new Error('not found!');
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
        throw new Error('not found!');
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
