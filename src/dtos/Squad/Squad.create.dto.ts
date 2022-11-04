import { IsNotEmpty, IsNumber, IsString, IsDate } from 'class-validator';

class SquadCreateDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  product_manager: string;

  @IsNotEmpty()
  @IsString()
  tech_manager: string;

  @IsNotEmpty()
  @IsDate()
  initialTime: Date;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  members: string[];
}

export { SquadCreateDTO };
