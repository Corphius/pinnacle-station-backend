import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

class BadgeREQUESTcreate {
  @ApiProperty({
    description: 'titulo do badge',
    example: 'string',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    description: 'imagem do badge',
    example: 'string.jps',
  })
  @IsNotEmpty()
  @IsString()
  image: string;

  @ApiProperty({
    description: 'campo de ativação do badge',
    example: 'true',
  })
  @IsNotEmpty()
  @IsBoolean()
  available: boolean;
}

export { BadgeREQUESTcreate };
