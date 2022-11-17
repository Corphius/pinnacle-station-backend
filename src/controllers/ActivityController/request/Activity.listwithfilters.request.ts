import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, IsUUID } from 'class-validator';

class ActivityREQUESTlistWithFilters {
  @IsUUID()
  tutorial_id: string;

  @IsString()
  description: string;

  @IsString()
  title: string;

  @IsString()
  image_title: string;

  @IsString()
  image_url: string;

  @IsInt()
  progress: number;
}

export { ActivityREQUESTlistWithFilters };
