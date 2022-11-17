import { Module } from '@nestjs/common';
import { QuestionController } from 'src/controllers/QuestionController/Question.controller';
import { QuestionRepository } from 'src/repositories/QuestionRepository/Question.implements.repository';
import { QuestionService } from 'src/services/Question.service';

@Module({
  imports: [],
  controllers: [QuestionController],
  providers: [
    QuestionService,
    { provide: 'IQuestionRepository', useClass: QuestionRepository },
  ],
})
export class QuestionModule {}
