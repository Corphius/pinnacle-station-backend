import { IsNotEmpty, IsString } from 'class-validator';

class UserREQUESTemail {
  @IsNotEmpty()
  @IsString()
  email: string;
}

export { UserREQUESTemail };
