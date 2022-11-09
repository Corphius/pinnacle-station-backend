import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';

class ActivityREQUESTlistWithFilters {
  @ApiProperty({
    description: 'Essa é a chave FK de da tabela TUTORIAL',
    example: 'uuidv4',
  })
  @IsUUID()
  tutorial_id?: string;

  @ApiProperty({
    description: 'Descrição da atividade',
    example:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis at lectus quis lobortis. Mauris ut tristique dolor, in suscipit ipsum. Aliquam aliquet magna et neque maximus ultricies. Donec viverra sapien risus. Sed euismod aliquam nunc, dignissim ultricies magna. Vivamus fringilla est sit amet rhoncus lobortis. Suspendisse fermentum maximus mauris, in consectetur dui molestie eu. Maecenas posuere urna ut diam aliquam, nec bibendum urna semper. Phasellus sit amet diam at dolor interdum pharetra eget vitae nisl. Aenean in urna velit. Donec consequat, lorem quis varius imperdiet, nulla purus pellentesque dolor, interdum pulvinar justo quam vel urna. Etiam porttitor laoreet libero at bibendum.',
  })
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'titulo da atividade',
    example: 'como fazer um cadastro ',
  })
  @IsString()
  title?: string;

  @ApiProperty({
    description: 'opções de resposta',
    example: ['one', 'eno', 'noe', 'eon'],
  })
  @IsString()
  options?: string[];

  @ApiProperty({
    description: 'resposta correta',
    example: 'one',
  })
  @IsString()
  answer?: string;

  @ApiProperty({
    description: 'titulo da imagem',
    example: 'imagem meramente ilustrativa',
  })
  @IsString()
  image_title?: string;

  @ApiProperty({
    description: 'url da imagem',
    example: 'https://google.com.br/icon',
  })
  @IsString()
  image_url?: string;

  @ApiProperty({
    description: 'rota das insignias',
    example: 'insigniadjqiwrjhniasdajdjaig_2020.jpg',
  })
  @IsString()
  badge?: string;
}

export { ActivityREQUESTlistWithFilters };
