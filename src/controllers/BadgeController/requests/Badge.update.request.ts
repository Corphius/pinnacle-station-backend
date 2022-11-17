import { IsBoolean, IsNotEmpty, IsString, IsUUID } from 'class-validator';

class BadgeREQUESTupdate {
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

export { BadgeREQUESTupdate };
