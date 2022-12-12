import { Inject } from '@nestjs/common';
import { BadgeCreateDTO } from 'src/dtos/Badge/Badge.create.dto';
import { BadgeUpdateDTO } from 'src/dtos/Badge/Badge.update.dto';
import { GenericException } from 'src/exceptions/Error/Generic.exception';
import { ServiceException } from 'src/exceptions/Error/Service.exception';

import { IBadgeRepository } from 'src/repositories/BadgeRepository/Badge.interface.repository';
import { IserviceCRUD } from './serviceContract/service.crud.interface';
import { createBadgeDTOforModel } from './servicesMappers/Badge.mapper';

class BadgeService implements IserviceCRUD {
  SERVICE_NAME = 'BADGE_SERVICE';

  constructor(
    @Inject('IBadgeRepository') private badgeRepository: IBadgeRepository,
  ) {}

  async create(badgeCreateDTO: BadgeCreateDTO) {
    try {
      return await this.badgeRepository.create(
        createBadgeDTOforModel(badgeCreateDTO),
      );
    } catch (error) {
      console.log(error);
      if (error instanceof GenericException) throw error;
      throw new ServiceException(this.SERVICE_NAME);
    }
  }

  async update(badgeUpdateDTO: BadgeUpdateDTO): Promise<any> {
    try {
      return await this.badgeRepository.updateById(
        badgeUpdateDTO.id,
        badgeUpdateDTO,
      );
    } catch (error) {
      console.log(error);
      if (error instanceof GenericException) throw error;
      throw new ServiceException(this.SERVICE_NAME);
    }
  }

  async getAllRegistersWithFilters(filters: any): Promise<any> {
    try {
      return await this.badgeRepository.getAllRegisters(filters);
    } catch (error) {
      console.log(error);
      if (error instanceof GenericException) throw error;
      throw new ServiceException(this.SERVICE_NAME);
    }
  }

  async getById(id: string): Promise<any> {
    try {
      const badge = await this.badgeRepository.getById(id);
      if (!badge) {
        throw new Error('not found!');
      }
      return badge;
    } catch (error) {
      console.log(error);
      if (error instanceof GenericException) throw error;
      throw new ServiceException(this.SERVICE_NAME);
    }
  }

  async deleteById(id: string): Promise<any> {
    try {
      const badge = await this.badgeRepository.getById(id);
      if (!badge) {
        throw new Error('not found!');
      } else {
        return await this.badgeRepository.deleteById(id);
      }
    } catch (error) {
      console.log(error);
      if (error instanceof GenericException) throw error;
      throw new ServiceException(this.SERVICE_NAME);
    }
  }
}

export { BadgeService };
