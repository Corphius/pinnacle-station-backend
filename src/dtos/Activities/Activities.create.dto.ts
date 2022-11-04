import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

class ActivitiesCreateDTO {
  @IsNotEmpty()
  @IsUUID()
  tutorial_id: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  options: string[];

  @IsNotEmpty()
  @IsString()
  answer: string;

  @IsNotEmpty()
  @IsString()
  image_title: string;

  @IsNotEmpty()
  @IsString()
  image_url: string;

  @IsNotEmpty()
  @IsString()
  badge: string;
}

export { ActivitiesCreateDTO };
