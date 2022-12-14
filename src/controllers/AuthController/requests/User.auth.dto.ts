import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

class UserREQUESTAuth {
  @IsUUID()
  userId: string;

  @ApiProperty({
    description: 'email para login',
    example: 'email@email.com',
  })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({
    description: 'senha de acesso',
    example: 'ema2l@fisdfhaisfom',
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}

export { UserREQUESTAuth };
