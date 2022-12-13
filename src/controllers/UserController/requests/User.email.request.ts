import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

class UserREQUESTemail {
  @ApiProperty({
    description: 'Email do usuario',
    example: 'string@email.com',
  })
  @IsNotEmpty()
  @IsString()
  email: string;
}

export { UserREQUESTemail };
