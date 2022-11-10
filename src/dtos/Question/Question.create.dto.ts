import { IsInt, IsNotEmpty, IsString, IsUUID } from 'class-validator';

class QuestionCreateDTO {
  @IsNotEmpty()
  @IsUUID()
  activity_id: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  image_url: string;

  @IsNotEmpty()
  @IsString()
  answer_options: string[];

  @IsNotEmpty()
  @IsInt()
  correct_answer_id: number;
}

export { QuestionCreateDTO };
