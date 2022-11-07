import { Injectable } from '@nestjs/common';
import { PrismaConfig } from 'src/databaseORM/prisma.config';
import { SquadUpdateDTO } from 'src/dtos/Squad/Squad.update.dto';
import { SquadModel } from '../../models/Squad.model';
import { ISquadRepository } from './Squad.interface.repository';

@Injectable()
class SquadRepository implements ISquadRepository {
  constructor(private prismaConfig: PrismaConfig) {}

  create(data: SquadModel): Promise<SquadModel> {
    return this.prismaConfig.squad.create({ data: data });
  }
  updateById(id: string, squadUpdateDTO: SquadUpdateDTO): Promise<SquadModel> {
    return this.prismaConfig.squad.update({
      where: { id: id },
      data: {
        updated_at: new Date(),
        ...squadUpdateDTO,
      },
    });
  }
  getAllRegisters(filters?: object): Promise<SquadModel[]> {
    return this.prismaConfig.squad.findMany({ where: filters });
  }
  getById(id: string): Promise<SquadModel> {
    return this.prismaConfig.squad.findUnique({ where: { id: id } });
  }
  deleteById(id: string) {
    return this.prismaConfig.squad.delete({ where: { id: id } });
  }
}

export { SquadRepository };
