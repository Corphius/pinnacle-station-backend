import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

class BadgeCreateDTO {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  image: string;

  @IsNotEmpty()
  @IsBoolean()
  available: boolean;
}

export { BadgeCreateDTO };
