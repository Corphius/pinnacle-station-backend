import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

class TutorialCreateDTO {
  @IsNotEmpty()
  @IsUUID()
  squad_id: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  urlVideo: string;

  @IsNotEmpty()
  @IsNumber()
  progress: number;

  @IsNotEmpty()
  @IsString()
  titleVideo: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  image_url: string;

  @IsNotEmpty()
  @IsString()
  outside_url: string;

  @IsNotEmpty()
  @IsString()
  image_title: string;

  @IsNotEmpty()
  @IsNumber()
  tutorial_tipe: number;
}

export { TutorialCreateDTO };
