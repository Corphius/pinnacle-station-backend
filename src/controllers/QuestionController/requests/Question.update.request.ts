import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, IsUUID } from 'class-validator';
class QuestionREQUESTupdate {
  @ApiProperty({
    description: 'PK da tabela QUESTION',
    example: 'uuidv4',
  })
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @ApiProperty({
    description: 'FK da tabela ACTIVITY',
    example: 'uuidv4',
  })
  @IsNotEmpty()
  @IsUUID()
  activity_id: string;

  @ApiProperty({
    description: 'titulo da questão',
    example: 'vetores e grafos',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    description: 'descriçãõ com os comandos da questão inicial',
    example:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis at lectus quis lobortis. Mauris ut tristique dolor, in suscipit ipsum. Aliquam aliquet',
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({
    description: 'url da imagem',
    example: 'https://google.com/images',
  })
  @IsNotEmpty()
  @IsString()
  image_url: string;

  @ApiProperty({
    description:
      'vetor de respostas onde a posição de cada vetor será usado para mapear a resposta correta',
    example: '["", "",""]',
  })
  @IsNotEmpty()
  @IsString()
  answer_options: string[];

  @ApiProperty({
    description: 'posição do vetor onde está a resposta correta',
    example: '0',
  })
  @IsNotEmpty()
  @IsInt()
  correct_answer_id: number;
}

export { QuestionREQUESTupdate };
