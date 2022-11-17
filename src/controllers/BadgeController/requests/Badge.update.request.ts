import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString, IsUUID } from 'class-validator';

class BadgeREQUESTupdate {
  @ApiProperty({
    description: 'PK da tabela BADGE',
    example: 'uuidv4',
  })
  @IsNotEmpty()
  @IsUUID()
  id: string;

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
    example: 'false',
  })
  @IsNotEmpty()
  @IsBoolean()
  available: boolean;
}

export { BadgeREQUESTupdate };
