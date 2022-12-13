import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

class TutorialREQUESTbadge {
  @ApiProperty({
    description: 'Essa é a chave FK de da tabela tutorial',
    example: 'uuidv4',
  })
  @IsNotEmpty()
  @IsUUID()
  tutorial_id: string;
  @ApiProperty({
    description: 'Essa é a chave FK de da tabela badge',
    example: 'uuidv4',
  })
  @IsNotEmpty()
  @IsUUID()
  badge_id: string;
}

export { TutorialREQUESTbadge };
