import { QuestionUpdateDTO } from 'src/dtos/Question/Question.update.dto';
import { QuestionModel } from 'src/models/Question.model';

export interface IQuestionRepository {
  create(data: QuestionModel): Promise<QuestionModel>;
  updateById(
    id: string,
    questionUpdateDTO: QuestionUpdateDTO,
  ): Promise<QuestionModel>;
  getAllRegisters(filters?: object): Promise<QuestionModel[]>;
  getById(id: string): Promise<QuestionModel>;
  deleteById(id: string): void;
}
