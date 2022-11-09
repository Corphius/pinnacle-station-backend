import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

class SquadREQUESTCreate {
  @ApiProperty({
    description: 'nome da squad',
    example: 'xp-ug',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'nome do product manager',
    example: 'fulano da silva',
  })
  @IsNotEmpty()
  @IsString()
  product_manager: string;

  @ApiProperty({
    description: 'nome do tech manager',
    example: 'ciclano da silva',
  })
  @IsNotEmpty()
  @IsString()
  tech_manager: string;

  @ApiProperty({
    description: 'descrição com as ativades do squad',
    example:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis at lectus quis lobortis. Mauris ut tristique dolor, in suscipit ipsum. Aliquam aliquet magna et neque maximus ultricies. Donec viverra sapien risus. Sed euismod aliquam nunc, dignissim ultricies magna. Vivamus fringilla est sit amet rhoncus lobortis. Suspendisse fermentum maximus mauris, in consectetur dui molestie eu. Maecenas posuere urna ut diam aliquam, nec bibendum urna semper. Phasellus sit amet diam at dolor interdum pharetra eget vitae nisl. Aenean in urna velit. Donec consequat, lorem quis varius imperdiet, nulla purus pellentesque dolor, interdum pulvinar justo quam vel urna. Etiam porttitor laoreet libero at bibendum.',
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({
    description: 'lista de membros do squad',
    example: ['fulano', 'ciclano', 'beltrano'],
  })
  @IsNotEmpty()
  @IsString()
  members: string[];
}

export { SquadREQUESTCreate };
