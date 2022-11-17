import { IsNotEmpty, IsUUID } from 'class-validator';

class BadgeOnActivityDTO {
  @IsNotEmpty()
  @IsUUID()
  activity_id: string;
  @IsNotEmpty()
  @IsUUID()
  badge_id: string;
}

export { BadgeOnActivityDTO };
