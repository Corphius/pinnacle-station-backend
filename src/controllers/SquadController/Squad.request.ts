import { IsDate, IsNotEmpty, IsString } from 'class-validator';

class SquadREQUESTCreate {
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
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  members: string[];
}

export { SquadREQUESTCreate };
