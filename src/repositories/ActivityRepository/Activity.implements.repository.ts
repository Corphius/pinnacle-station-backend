import { PrismaConfig } from 'src/databaseORM/prisma.config';
import { ActivityModel } from 'src/models/Activities.model';
import { IActivityRepository } from './Activity.interface.repository';

class ActivityRepository implements IActivityRepository {
  constructor(private prismaConfig: PrismaConfig) {}
  create(data: ActivityModel): Promise<ActivityModel> {
    return this.prismaConfig.activity.create({ data: data });
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
}

export { ActivityRepository };
