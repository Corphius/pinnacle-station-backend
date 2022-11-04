import { TutorialModel } from 'src/models/Tutorial.model';
import { ITutorialRepository } from './Tutorial.interface.repository';

class TutorialRepository implements ITutorialRepository {
  create(data: TutorialModel): Promise<TutorialModel> {
    throw new Error('Method not implemented.');
  }
  getAllRegisters(filters?: object): Promise<TutorialModel[]> {
    throw new Error('Method not implemented.');
  }
  getById(id: string): Promise<TutorialModel> {
    throw new Error('Method not implemented.');
  }
  deleteById(id: string): void {
    throw new Error('Method not implemented.');
  }
}

export { TutorialRepository };
