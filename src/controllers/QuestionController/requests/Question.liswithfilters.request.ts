import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, IsUUID } from 'class-validator';

class QuestionREQUESTlistWithFilters {
  @ApiProperty({
    description: 'FK da tabela ACTIVITY',
    example: 'uuidv4',
  })
  @IsUUID()
  activity_id?: string;

  @ApiProperty({
    description: 'titulo da questão',
    example: 'vetores e grafos',
  })
  @IsString()
  title?: string;

  @ApiProperty({
    description: 'descriçãõ com os comandos da questão inicial',
    example:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis at lectus quis lobortis. Mauris ut tristique dolor, in suscipit ipsum. Aliquam aliquet',
  })
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'url da imagem',
    example: 'https://google.com/images',
  })
  @IsString()
  image_url?: string;

  @ApiProperty({
    description:
      'vetor de respostas onde a posição de cada vetor será usado para mapear a resposta correta',
    example: '["", "",""]',
  })
  @IsString()
  answer_options?: string[];

  @ApiProperty({
    description: 'posição do vetor onde está a resposta correta',
    example: '0',
  })
  @IsInt()
  correct_answer_id?: number;
}

export { QuestionREQUESTlistWithFilters };
