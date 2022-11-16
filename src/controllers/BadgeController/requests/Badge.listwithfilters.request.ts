import { IsBoolean, IsString } from 'class-validator';

class BadgeREQUESTlistWithFilters {
  @IsString()
  title: string;

  @IsString()
  image: string;

  @IsBoolean()
  available: boolean;
}

export { BadgeREQUESTlistWithFilters };
