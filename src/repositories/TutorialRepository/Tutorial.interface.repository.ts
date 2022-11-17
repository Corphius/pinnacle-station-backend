import { BadgeOnTutorialDTO } from 'src/dtos/BadgeOnTutorial/BadgeOnTutorial.dto';
import { TutorialUpdateDTO } from 'src/dtos/Tutorial/Tutorial.update.dto';
import { TutorialModel } from 'src/models/Tutorial.model';

export interface ITutorialRepository {
  create(data: TutorialModel): Promise<TutorialModel>;
  updateById(
    id: string,
    tutorialUpdateDTO: TutorialUpdateDTO,
  ): Promise<TutorialModel>;
  getAllRegisters(filters?: object): Promise<TutorialModel[]>;
  getById(id: string): Promise<TutorialModel>;
  deleteById(id: string): void;
  createBadgeForTutorial(data: BadgeOnTutorialDTO): Promise<BadgeOnTutorialDTO>;
}
