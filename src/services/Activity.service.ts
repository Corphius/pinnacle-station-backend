import { Inject, Injectable } from '@nestjs/common';
import { ActivitiesCreateDTO } from 'src/dtos/Activities/Activities.create.dto';
import { ActivitiesUpdateDTO } from 'src/dtos/Activities/Activities.update.dto';
import { GenericException } from 'src/exceptions/Generic.exception';
import { ServiceException } from 'src/exceptions/Service.exception';
import { IActivityRepository } from 'src/repositories/ActivityRepository/Activity.interface.repository';
import { IserviceCRUD } from './serviceContract/service.crud.interface';
import { createActivityDTOforModel } from './servicesMappers/Activity.mapper';

@Injectable()
class ActivityService implements IserviceCRUD {
  SERVICE_NAME = 'ACTIVITY_SERVICE';

  constructor(
    @Inject('IActivityRepository')
    private activityRepository: IActivityRepository,
  ) {}

  async create(activityCreateDTO: ActivitiesCreateDTO) {
    try {
      // fazer validações.
      return await this.activityRepository.create(
        createActivityDTOforModel(activityCreateDTO),
      );
    } catch (error) {
      console.log(error);
      if (error instanceof GenericException) throw error;
      throw new ServiceException(this.SERVICE_NAME);
    }
  }
  async update(activitiesUpdateDTO: ActivitiesUpdateDTO) {
    try {
      return await this.activityRepository.updateById(
        activitiesUpdateDTO.id,
        activitiesUpdateDTO,
      );
    } catch (error) {
      console.log(error);
      if (error instanceof GenericException) throw error;
      throw new ServiceException(this.SERVICE_NAME);
    }
  }
  async getAllRegistersWithFilters(filters: object) {
    try {
      return await this.activityRepository.getAllRegisters(filters);
    } catch (error) {
      console.log(error);
      if (error instanceof GenericException) throw error;
      throw new ServiceException(this.SERVICE_NAME);
    }
  }
  async getById(id: string) {
    try {
      const tutorial = await this.activityRepository.getById(id);

      if (!tutorial) {
        throw new Error('not found!');
      }
      return tutorial;
    } catch (error) {
      console.log(error);
      if (error instanceof GenericException) throw error;
      throw new ServiceException(this.SERVICE_NAME);
    }
  }
  async deleteById(id: string) {
    try {
      const tutorial = await this.getById(id);
      if (!tutorial) {
        throw new Error('not found!');
      } else {
        return await this.activityRepository.deleteById(id);
      }
    } catch (error) {
      console.log(error);
      if (error instanceof GenericException) throw error;
      throw new ServiceException(this.SERVICE_NAME);
    }
  }
}

export { ActivityService };
