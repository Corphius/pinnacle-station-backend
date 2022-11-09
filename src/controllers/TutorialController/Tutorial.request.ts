import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

class TutorialREQUESTCreate {
  @ApiProperty({
    description: 'Essa é a chave FK de da tabela SQUAD',
    example: 'uuidv4',
  })
  @IsNotEmpty()
  @IsUUID()
  squad_id: string;

  @ApiProperty({
    description: 'titulo do tutorial',
    example: 'como fazer um mkdocs',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    description: 'link para o video de outras plataformas',
    example: 'https://descomplica.com.br',
  })
  @IsNotEmpty()
  @IsString()
  urlVideo: string;

  @ApiProperty({
    description: 'porcentagem do tutorial',
    example: '10',
  })
  @IsNotEmpty()
  @IsNumber()
  progress: number;

  @ApiProperty({
    description: 'titulo do video',
    example: 'como estudar?',
  })
  @IsNotEmpty()
  @IsString()
  titleVideo: string;

  @ApiProperty({
    description: 'descrições e passo a passos',
    example:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis at lectus quis lobortis. Mauris ut tristique dolor, in suscipit ipsum. Aliquam aliquet magna et neque maximus ultricies. Donec viverra sapien risus. Sed euismod aliquam nunc, dignissim ultricies magna. Vivamus fringilla est sit amet rhoncus lobortis. Suspendisse fermentum maximus mauris, in consectetur dui molestie eu. Maecenas posuere urna ut diam aliquam, nec bibendum urna semper. Phasellus sit amet diam at dolor interdum pharetra eget vitae nisl. Aenean in urna velit. Donec consequat, lorem quis varius imperdiet, nulla purus pellentesque dolor, interdum pulvinar justo quam vel urna. Etiam porttitor laoreet libero at bibendum.',
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({
    description: 'url da imagem',
    example: 'https://descomplica.com.br/pos-graduacao/',
  })
  @IsNotEmpty()
  @IsString()
  image_url: string;

  @ApiProperty({
    description: 'url de paginas de fora para documentações complementares',
    example: 'https://descomplica.com.br/pos-graduacao/',
  })
  @IsNotEmpty()
  @IsString()
  outside_url: string;

  @ApiProperty({
    description: 'titulo da imagem',
    example: 'iconev2',
  })
  @IsNotEmpty()
  @IsString()
  image_title: string;

  @ApiProperty({
    description: 'tipo de tutorial',
    example: '1',
  })
  @IsNotEmpty()
  @IsNumber()
  tutorial_type: number;
}
class TutorialREQUESTUpdate {
  @ApiProperty({
    description:
      'Essa é a chave PK de da tabela TUTORIAL para alterações e deleções',
    example: 'uuidv4',
  })
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @ApiProperty({
    description: 'Essa é a chave FK de da tabela SQUAD',
    example: 'uuidv4',
  })
  @IsNotEmpty()
  @IsUUID()
  squad_id: string;

  @ApiProperty({
    description: 'titulo do tutorial',
    example: 'como fazer um mkdocs',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    description: 'link para o video de outras plataformas',
    example: 'https://descomplica.com.br',
  })
  @IsNotEmpty()
  @IsString()
  urlVideo: string;

  @ApiProperty({
    description: 'porcentagem do tutorial',
    example: '10',
  })
  @IsNotEmpty()
  @IsNumber()
  progress: number;

  @ApiProperty({
    description: 'titulo do video',
    example: 'como estudar?',
  })
  @IsNotEmpty()
  @IsString()
  titleVideo: string;

  @ApiProperty({
    description: 'descrições e passo a passos',
    example:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis at lectus quis lobortis. Mauris ut tristique dolor, in suscipit ipsum. Aliquam aliquet magna et neque maximus ultricies. Donec viverra sapien risus. Sed euismod aliquam nunc, dignissim ultricies magna. Vivamus fringilla est sit amet rhoncus lobortis. Suspendisse fermentum maximus mauris, in consectetur dui molestie eu. Maecenas posuere urna ut diam aliquam, nec bibendum urna semper. Phasellus sit amet diam at dolor interdum pharetra eget vitae nisl. Aenean in urna velit. Donec consequat, lorem quis varius imperdiet, nulla purus pellentesque dolor, interdum pulvinar justo quam vel urna. Etiam porttitor laoreet libero at bibendum.',
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({
    description: 'url da imagem',
    example: 'https://descomplica.com.br/pos-graduacao/',
  })
  @IsNotEmpty()
  @IsString()
  image_url: string;

  @ApiProperty({
    description: 'url de paginas de fora para documentações complementares',
    example: 'https://descomplica.com.br/pos-graduacao/',
  })
  @IsNotEmpty()
  @IsString()
  outside_url: string;

  @ApiProperty({
    description: 'titulo da imagem',
    example: 'iconev2',
  })
  @IsNotEmpty()
  @IsString()
  image_title: string;

  @ApiProperty({
    description: 'tipo de tutorial',
    example: '1',
  })
  @IsNotEmpty()
  @IsNumber()
  tutorial_type: number;
}

export { TutorialREQUESTCreate, TutorialREQUESTUpdate };
