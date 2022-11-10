import { Inject, Injectable } from '@nestjs/common';
import { QuestionCreateDTO } from 'src/dtos/Question/Question.create.dto';
import { QuestionUpdateDTO } from 'src/dtos/Question/Question.update.dto';
import { GenericException } from 'src/exceptions/Generic.exception';
import { ServiceException } from 'src/exceptions/Service.exception';
import { IQuestionRepository } from 'src/repositories/QuestionRepository/Question.interface.repository';
import { IserviceCRUD } from './serviceContract/service.crud.interface';
import { createQuestionDTOforModel } from './servicesMappers/Question.mapper';

@Injectable()
class QuestionService implements IserviceCRUD {
  SERVICE_NAME = 'QUESTION_SERVICE';

  constructor(
    @Inject('IQuestionRepository')
    private questionRepository: IQuestionRepository,
  ) {}

  async create(questionCreateDTO: QuestionCreateDTO) {
    try {
      // fazer validações.
      return await this.questionRepository.create(
        createQuestionDTOforModel(questionCreateDTO),
      );
    } catch (error) {
      console.log(error);
      if (error instanceof GenericException) throw error;
      throw new ServiceException(this.SERVICE_NAME);
    }
  }

  async update(questionUpdateDTO: QuestionUpdateDTO) {
    try {
      return await this.questionRepository.updateById(
        questionUpdateDTO.id,
        questionUpdateDTO,
      );
    } catch (error) {
      console.log(error);
      if (error instanceof GenericException) throw error;
      throw new ServiceException(this.SERVICE_NAME);
    }
  }

  async getAllRegistersWithFilters(filters: any) {
    try {
      return await this.questionRepository.getAllRegisters(filters);
    } catch (error) {
      console.log(error);
      if (error instanceof GenericException) throw error;
      throw new ServiceException(this.SERVICE_NAME);
    }
  }

  async getById(id: string) {
    try {
      const tutorial = await this.questionRepository.getById(id);

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
        return await this.questionRepository.deleteById(id);
      }
    } catch (error) {
      console.log(error);
      if (error instanceof GenericException) throw error;
      throw new ServiceException(this.SERVICE_NAME);
    }
  }
}

export { QuestionService };
