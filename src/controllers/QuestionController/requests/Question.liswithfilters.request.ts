import { IsInt, IsString, IsUUID } from 'class-validator';

class QuestionREQUESTlistWithFilters {
  @IsUUID()
  activity_id?: string;

  @IsString()
  title?: string;

  @IsString()
  description?: string;

  @IsString()
  image_url?: string;

  @IsString()
  answer_options?: string[];

  @IsInt()
  correct_answer_id?: number;
}

export { QuestionREQUESTlistWithFilters };
