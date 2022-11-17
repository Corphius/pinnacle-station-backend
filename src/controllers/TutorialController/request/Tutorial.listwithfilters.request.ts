import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsUUID } from 'class-validator';

class TutorialREQUESTlistWithFilters {
  @ApiProperty({
    description: 'Essa é a chave FK de da tabela SQUAD',
    example: 'uuidv4',
  })
  @IsUUID()
  squad_id: string;

  @ApiProperty({
    description: 'titulo do tutorial',
    example: 'como fazer um mkdocs',
  })
  @IsString()
  title: string;

  @ApiProperty({
    description: 'link para o video de outras plataformas',
    example: 'https://descomplica.com.br',
  })
  @IsString()
  urlVideo: string;

  @ApiProperty({
    description: 'porcentagem do tutorial',
    example: '10',
  })
  @IsNumber()
  progress: number;

  @ApiProperty({
    description: 'titulo do video',
    example: 'como estudar?',
  })
  @IsString()
  titleVideo: string;

  @ApiProperty({
    description: 'descrições e passo a passos',
    example:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis at lectus quis lobortis. Mauris ut tristique dolor, in suscipit ipsum. Aliquam aliquet magna et neque maximus ultricies. Donec viverra sapien risus. Sed euismod aliquam nunc, dignissim ultricies magna. Vivamus fringilla est sit amet rhoncus lobortis. Suspendisse fermentum maximus mauris, in consectetur dui molestie eu. Maecenas posuere urna ut diam aliquam, nec bibendum urna semper. Phasellus sit amet diam at dolor interdum pharetra eget vitae nisl. Aenean in urna velit. Donec consequat, lorem quis varius imperdiet, nulla purus pellentesque dolor, interdum pulvinar justo quam vel urna. Etiam porttitor laoreet libero at bibendum.',
  })
  @IsString()
  description: string;

  @ApiProperty({
    description: 'url da imagem',
    example: 'https://descomplica.com.br/pos-graduacao/',
  })
  @IsString()
  image_url: string;

  @ApiProperty({
    description: 'url de paginas de fora para documentações complementares',
    example: 'https://descomplica.com.br/pos-graduacao/',
  })
  @IsString()
  outside_url: string;

  @ApiProperty({
    description: 'titulo da imagem',
    example: 'iconev2',
  })
  @IsString()
  image_title: string;

  @ApiProperty({
    description: 'tipo de tutorial',
    example: '1',
  })
  @IsNumber()
  tutorial_type: number;
}

export { TutorialREQUESTlistWithFilters };
