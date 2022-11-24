import { IsNotEmpty, IsString } from 'class-validator';

class UserREQUESTcreate {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

export { UserREQUESTcreate };
