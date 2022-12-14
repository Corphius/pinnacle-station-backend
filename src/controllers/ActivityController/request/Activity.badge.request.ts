import { ApiProperty, getSchemaPath } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

class ActivityREQUESTbadge {
  @ApiProperty({
    description: 'Essa é a chave FK de da tabela activity',
    example: 'uuidv4',
  })
  @IsNotEmpty()
  @IsUUID()
  activity_id: string;
  @ApiProperty({
    description: 'Essa é a chave FK de da tabela badge',
    example: 'uuidv4',
  })
  @IsNotEmpty()
  @IsUUID()
  badge_id: string;
}

export { ActivityREQUESTbadge };
