import { TutorialCreateDTO } from 'src/dtos/Tutorial/Tutorial.create.dto';
import { TutorialModel } from 'src/models/Tutorial.model';

export const createTutorialDTOforModel = (
  tutorialCreateDTO: TutorialCreateDTO,
) => {
  return new TutorialModel({
    ...tutorialCreateDTO,
  });
};
