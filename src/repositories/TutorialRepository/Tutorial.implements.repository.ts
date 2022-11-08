import { Injectable } from '@nestjs/common';
import { PrismaConfig } from 'src/databaseORM/prisma.config';
import { TutorialUpdateDTO } from 'src/dtos/Tutorial/Tutorial.update.dto';
import { TutorialModel } from 'src/models/Tutorial.model';
import { ITutorialRepository } from './Tutorial.interface.repository';

@Injectable()
class TutorialRepository implements ITutorialRepository {
  constructor(private prismaConfig: PrismaConfig) {}

  create(data: TutorialModel): Promise<TutorialModel> {
    return this.prismaConfig.tutorial.create({ data: data });
  }
  updateById(
    id: string,
    tutorialUpdateDTO: TutorialUpdateDTO,
  ): Promise<TutorialModel> {
    return this.prismaConfig.tutorial.update({
      where: { id: id },
      data: {
        updated_at: new Date(),
        ...tutorialUpdateDTO,
      },
    });
  }
  getAllRegisters(filters?: object): Promise<TutorialModel[]> {
    return this.prismaConfig.tutorial.findMany({ where: filters });
  }
  getById(id: string): Promise<TutorialModel> {
    return this.prismaConfig.tutorial.findUnique({ where: { id: id } });
  }
  deleteById(id: string) {
    return this.prismaConfig.tutorial.delete({ where: { id: id } });
  }
}

export { TutorialRepository };
