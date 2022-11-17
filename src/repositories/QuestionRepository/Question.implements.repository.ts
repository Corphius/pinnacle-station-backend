import { Injectable } from '@nestjs/common';
import { PrismaConfig } from 'src/databaseORM/prisma.config';
import { QuestionUpdateDTO } from 'src/dtos/Question/Question.update.dto';
import { QuestionModel } from 'src/models/Question.model';
import { IQuestionRepository } from './Question.interface.repository';

@Injectable()
class QuestionRepository implements IQuestionRepository {
  constructor(private prismaConfig: PrismaConfig) {}

  create(data: QuestionModel): Promise<QuestionModel> {
    return this.prismaConfig.question.create({ data: data });
  }
  updateById(
    id: string,
    questionUpdateDTO: QuestionUpdateDTO,
  ): Promise<QuestionModel> {
    return this.prismaConfig.question.update({
      where: { id: id },
      data: {
        updated_at: new Date(),
        ...questionUpdateDTO,
      },
    });
  }
  getAllRegisters(filters?: object): Promise<QuestionModel[]> {
    return this.prismaConfig.question.findMany({ where: filters });
  }
  getById(id: string): Promise<QuestionModel> {
    return this.prismaConfig.question.findUnique({ where: { id: id } });
  }
  deleteById(id: string) {
    return this.prismaConfig.question.delete({ where: { id: id } });
  }
}

export { QuestionRepository };
