import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, IsUUID } from 'class-validator';

class ActivityREQUESTCreate {
  @ApiProperty({
    description: 'FK da tabela TUTORIAL',
    example: 'uuidv4',
  })
  @IsNotEmpty()
  @IsUUID()
  tutorial_id: string;

  @ApiProperty({
    description: 'descrição da atividade',
    example: 'string',
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({
    description: 'titulo da atividade',
    example: 'string',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    description: 'titulo da imagem',
    example: 'string',
  })
  @IsNotEmpty()
  @IsString()
  image_title: string;

  @ApiProperty({
    description: 'URL da imagem',
    example: 'stringurl.jsp',
  })
  @IsNotEmpty()
  @IsString()
  image_url: string;

  @ApiProperty({
    description: 'porcentagem do andamento da atividade',
    example: '10',
  })
  @IsNotEmpty()
  @IsInt()
  progress: number;
}

export { ActivityREQUESTCreate };
