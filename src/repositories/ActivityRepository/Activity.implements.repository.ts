import { ActivityModel } from 'src/models/Activities.model';
import { IActivityRepository } from './Activity.interface.repository';

class ActivityRepository implements IActivityRepository {
  create(data: ActivityModel): Promise<ActivityModel> {
    throw new Error('Method not implemented.');
  }
  getAllRegisters(filters?: object): Promise<ActivityModel[]> {
    throw new Error('Method not implemented.');
  }
  getById(id: string): Promise<ActivityModel> {
    throw new Error('Method not implemented.');
  }
  deleteById(id: string): void {
    throw new Error('Method not implemented.');
  }
}

export { ActivityRepository };
