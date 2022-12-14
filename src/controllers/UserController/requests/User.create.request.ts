import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

class UserREQUESTcreate {
  @ApiProperty({
    description: 'Nome do novo usuario',
    example: 'string gnirts',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Email do novo usuario',
    example: 'string@email.com',
  })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({
    description: 'senha do novo usuario',
    example: '1@2@3@4',
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}

export { UserREQUESTcreate };
