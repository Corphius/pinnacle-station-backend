import { TutorialModel } from 'src/models/Tutorial.model';

export interface ITutorialRepository {
  create(data: TutorialModel): Promise<TutorialModel>;
  getAllRegisters(filters?: object): Promise<TutorialModel[]>;
  getById(id: string): Promise<TutorialModel>;
  deleteById(id: string): void;
}
