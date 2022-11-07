import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
class SquadUpdateDTO {
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @IsNotEmpty()
  @IsString()
  name?: string;

  @IsNotEmpty()
  @IsString()
  product_manager?: string;

  @IsNotEmpty()
  @IsString()
  tech_manager?: string;

  @IsNotEmpty()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsString()
  members?: string[];
}

export { SquadUpdateDTO };
