import { Inject, Injectable } from '@nestjs/common';
import { BadgeOnTutorialDTO } from 'src/dtos/BadgeOnTutorial/BadgeOnTutorial.dto';
import { TutorialCreateDTO } from 'src/dtos/Tutorial/Tutorial.create.dto';
import { TutorialUpdateDTO } from 'src/dtos/Tutorial/Tutorial.update.dto';
import { GenericException } from 'src/exceptions/Error/Generic.exception';
import { ServiceException } from 'src/exceptions/Error/Service.exception';

import { IBadgeRepository } from 'src/repositories/BadgeRepository/Badge.interface.repository';
import { ITutorialRepository } from 'src/repositories/TutorialRepository/Tutorial.interface.repository';
import { IserviceCRUD } from './serviceContract/service.crud.interface';
import { createTutorialDTOforModel } from './servicesMappers/Tutorial.mapper';

@Injectable()
class TutorialService implements IserviceCRUD {
  SERVICE_NAME = 'TUTORIAL_SERVICE';

  constructor(
    @Inject('ITutorialRepository')
    private tutorialRepository: ITutorialRepository,
    @Inject('IBadgeRepository')
    private badgeRepository: IBadgeRepository,
  ) {}

  async create(tutorialCreateDTO: TutorialCreateDTO) {
    try {
      // fazer validações.
      return await this.tutorialRepository.create(
        createTutorialDTOforModel(tutorialCreateDTO),
      );
    } catch (error) {
      console.log(error);
      if (error instanceof GenericException) throw error;
      throw new ServiceException(this.SERVICE_NAME);
    }
  }
  async update(tutorialUpdateDTO: TutorialUpdateDTO) {
    try {
      return await this.tutorialRepository.updateById(
        tutorialUpdateDTO.id,
        tutorialUpdateDTO,
      );
    } catch (error) {
      console.log(error);
      if (error instanceof GenericException) throw error;
      throw new ServiceException(this.SERVICE_NAME);
    }
  }
  async getAllRegistersWithFilters(filters: object) {
    try {
      return await this.tutorialRepository.getAllRegisters(filters);
    } catch (error) {
      console.log(error);
      if (error instanceof GenericException) throw error;
      throw new ServiceException(this.SERVICE_NAME);
    }
  }
  async getById(id: string) {
    try {
      const tutorial = await this.tutorialRepository.getById(id);

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
        return await this.tutorialRepository.deleteById(id);
      }
    } catch (error) {
      console.log(error);
      if (error instanceof GenericException) throw error;
      throw new ServiceException(this.SERVICE_NAME);
    }
  }

  async badgeForTutorial(data: BadgeOnTutorialDTO) {
    try {
      const tutorial = await this.tutorialRepository.getById(data.tutorial_id);

      if (!tutorial) {
        throw new Error('tutorial does not found!');
      }

      const badge = await this.badgeRepository.getById(data.badge_id);

      if (!badge) {
        throw new Error('badge does not found!');
      }

      return await this.tutorialRepository.createBadgeForTutorial(data);
    } catch (error) {
      console.log(error);
      if (error instanceof GenericException) throw error;
      throw new ServiceException(this.SERVICE_NAME);
    }
  }
}

export { TutorialService };
