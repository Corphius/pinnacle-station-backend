import { QuestionCreateDTO } from 'src/dtos/Question/Question.create.dto';
import { QuestionModel } from 'src/models/Question.model';

export const createQuestionDTOforModel = (
  questionCreateDTO: QuestionCreateDTO,
) => {
  return new QuestionModel({
    ...questionCreateDTO,
  });
};
