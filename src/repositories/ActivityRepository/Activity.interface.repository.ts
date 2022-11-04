import { ActivityModel } from 'src/models/Activities.model';

export interface IActivityRepository {
  create(data: ActivityModel): Promise<ActivityModel>;
  getAllRegisters(filters?: object): Promise<ActivityModel[]>;
  getById(id: string): Promise<ActivityModel>;
  deleteById(id: string): void;
}
