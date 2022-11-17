import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, IsUUID } from 'class-validator';

class ActivityREQUESTlistWithFilters {
  @ApiProperty({
    description: 'FK da tabela TUTORIAL',
    example: 'uuidv4',
  })
  @IsUUID()
  tutorial_id: string;

  @ApiProperty({
    description: 'descrição da atividade',
    example: 'string',
  })
  @IsString()
  description: string;

  @ApiProperty({
    description: 'titulo da atividade',
    example: 'string',
  })
  @IsString()
  title: string;

  @ApiProperty({
    description: 'titulo da imagem',
    example: 'string',
  })
  @IsString()
  image_title: string;

  @ApiProperty({
    description: 'URL da imagem',
    example: 'stringurl.jsp',
  })
  @IsString()
  image_url: string;

  @ApiProperty({
    description: 'porcentagem do andamento da atividade',
    example: '10',
  })
  @IsInt()
  progress: number;
}

export { ActivityREQUESTlistWithFilters };
