import { IsInt, IsNotEmpty, IsString, IsUUID } from 'class-validator';

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
  image_title: string;

  @IsNotEmpty()
  @IsString()
  image_url: string;

  @IsNotEmpty()
  @IsInt()
  progress: number;
}

export { ActivitiesCreateDTO };
