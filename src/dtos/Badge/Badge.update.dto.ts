import { IsBoolean, IsNotEmpty, IsString, IsUUID } from 'class-validator';

class BadgeUpdateDTO {
  @IsNotEmpty()
  @IsUUID()
  id: string;

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

export { BadgeUpdateDTO };
