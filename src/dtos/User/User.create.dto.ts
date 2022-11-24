import { IsNotEmpty, IsString } from 'class-validator';

class UserCreateDTO {
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

export { UserCreateDTO };
