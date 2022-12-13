import { Inject, Injectable } from '@nestjs/common';
import { ActivitiesCreateDTO } from 'src/dtos/Activities/Activities.create.dto';
import { ActivitiesUpdateDTO } from 'src/dtos/Activities/Activities.update.dto';
import { BadgeOnActivityDTO } from 'src/dtos/BadgeOnActivity/BadgeOnActivity.dto';
import { GenericException } from 'src/exceptions/ErrorImplements/Generic.exception';
import { NotFoundException } from 'src/exceptions/ErrorImplements/NotFound.execption';
import { ServiceException } from 'src/exceptions/ErrorImplements/Service.exception';

import { IActivityRepository } from 'src/repositories/ActivityRepository/Activity.interface.repository';
import { IBadgeRepository } from 'src/repositories/BadgeRepository/Badge.interface.repository';
import { IserviceCRUD } from './serviceContract/service.crud.interface';
import { createActivityDTOforModel } from './servicesMappers/Activity.mapper';

@Injectable()
class ActivityService implements IserviceCRUD {
  SERVICE_NAME = 'ACTIVITY_SERVICE';

  constructor(
    @Inject('IActivityRepository')
    private activityRepository: IActivityRepository,
    @Inject('IBadgeRepository')
    private badgeRepository: IBadgeRepository,
  ) {}

  async create(activityCreateDTO: ActivitiesCreateDTO) {
    try {
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
      const activity = await this.activityRepository.getById(id);

      if (!activity) {
        throw new NotFoundException(id);
      }
      return activity;
    } catch (error) {
      console.log(error);
      if (error instanceof GenericException) throw error;
      throw new ServiceException(this.SERVICE_NAME);
    }
  }
  async deleteById(id: string) {
    try {
      const activity = await this.getById(id);
      if (!activity) {
        throw new NotFoundException('not found activity');
      } else {
        return await this.activityRepository.deleteById(id);
      }
    } catch (error) {
      console.log(error);
      if (error instanceof GenericException) throw error;
      throw new ServiceException(this.SERVICE_NAME);
    }
  }

  async badgeForTheActivity(data: BadgeOnActivityDTO) {
    try {
      const activity = await this.activityRepository.getById(data.activity_id);

      if (!activity) {
        throw new NotFoundException('activity does not found!');
      }

      const badge = await this.badgeRepository.getById(data.badge_id);

      if (!badge) {
        throw new NotFoundException('badge does not found!');
      }

      return await this.activityRepository.createBadgeForActivity(data);
    } catch (error) {
      console.log(error);
      if (error instanceof GenericException) throw error;
      throw new ServiceException(this.SERVICE_NAME);
    }
  }
}

export { ActivityService };
