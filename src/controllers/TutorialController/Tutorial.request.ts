import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

class TutorialREQUESTCreate {
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
  tutorial_type: number;
}
class TutorialREQUESTUpdate {
  @IsNotEmpty()
  @IsUUID()
  id: string;

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
  tutorial_type: number;
}

export { TutorialREQUESTCreate, TutorialREQUESTUpdate };
