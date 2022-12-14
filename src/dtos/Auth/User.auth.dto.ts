import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

class UserAuthDTO {
  @IsUUID()
  userId: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

export { UserAuthDTO };
