import { Injectable } from '@nestjs/common';
import { PrismaConfig } from 'src/databaseORM/prisma.config';
import { BadgeUpdateDTO } from 'src/dtos/Badge/Badge.update.dto';
import { BadgeModel } from 'src/models/Badge.model';
import { IBadgeRepository } from './Badge.interface.repository';

@Injectable()
class BadgeRepository implements IBadgeRepository {
  constructor(private prismaConfig: PrismaConfig) {}

  create(data: BadgeModel): Promise<BadgeModel> {
    return this.prismaConfig.badge.create({ data: data });
  }
  updateById(id: string, badgeUpdateDTO: BadgeUpdateDTO): Promise<BadgeModel> {
    return this.prismaConfig.badge.update({
      where: { id: id },
      data: {
        updated_at: new Date(),
        ...badgeUpdateDTO,
      },
    });
  }
  getAllRegisters(filters?: object): Promise<BadgeModel[]> {
    return this.prismaConfig.badge.findMany({ where: filters });
  }
  getById(id: string): Promise<BadgeModel> {
    return this.prismaConfig.badge.findUnique({ where: { id: id } });
  }
  deleteById(id: string) {
    return this.prismaConfig.badge.delete({ where: { id: id } });
  }
}

export { BadgeRepository };
