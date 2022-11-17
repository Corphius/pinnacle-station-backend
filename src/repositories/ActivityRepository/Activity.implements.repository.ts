import { Injectable } from '@nestjs/common';
import { PrismaConfig } from 'src/databaseORM/prisma.config';
import { ActivitiesUpdateDTO } from 'src/dtos/Activities/Activities.update.dto';
import { BadgeOnActivityDTO } from 'src/dtos/BadgeOnActivity/BadgeOnActivity.dto';
import { ActivityModel } from 'src/models/Activities.model';
import { IActivityRepository } from './Activity.interface.repository';

@Injectable()
class ActivityRepository implements IActivityRepository {
  constructor(private prismaConfig: PrismaConfig) {}

  create(data: ActivityModel): Promise<ActivityModel> {
    return this.prismaConfig.activity.create({ data: data });
  }
  updateById(
    id: string,
    activityUpdateDTO: ActivitiesUpdateDTO,
  ): Promise<ActivityModel> {
    return this.prismaConfig.activity.update({
      where: { id: id },
      data: {
        updated_at: new Date(),
        ...activityUpdateDTO,
      },
    });
  }
  getAllRegisters(filters?: object): Promise<ActivityModel[]> {
    return this.prismaConfig.activity.findMany({ where: filters });
  }
  getById(id: string): Promise<ActivityModel> {
    return this.prismaConfig.activity.findUnique({ where: { id: id } });
  }
  deleteById(id: string) {
    return this.prismaConfig.activity.delete({ where: { id: id } });
  }

  createBadgeForActivity(
    data: BadgeOnActivityDTO,
  ): Promise<BadgeOnActivityDTO> {
    return this.prismaConfig.badgeOnActivity.create({
      data: { created_at: new Date(), ...data },
    });
  }
}

export { ActivityRepository };
