import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

class BadgeREQUESTcreate {
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

export { BadgeREQUESTcreate };
