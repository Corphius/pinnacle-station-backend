import { IsNotEmpty, IsString } from 'class-validator';

class userEmailDTO {
  @IsNotEmpty()
  @IsString()
  email: string;
}

export { userEmailDTO };
