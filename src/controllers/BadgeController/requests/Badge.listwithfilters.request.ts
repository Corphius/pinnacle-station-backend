import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';

class BadgeREQUESTlistWithFilters {
  @ApiProperty({
    description: 'titulo do badge',
    example: 'string',
  })
  @IsString()
  title: string;

  @ApiProperty({
    description: 'imagem do badge',
    example: 'string.jps',
  })
  @IsString()
  image: string;

  @ApiProperty({
    description: 'campo de ativação do badge',
    example: 'false',
  })
  @IsBoolean()
  available: boolean;
}

export { BadgeREQUESTlistWithFilters };
