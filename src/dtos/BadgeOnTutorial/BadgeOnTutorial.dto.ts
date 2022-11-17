import { IsNotEmpty, IsUUID } from 'class-validator';

class BadgeOnTutorialDTO {
  @IsNotEmpty()
  @IsUUID()
  tutorial_id: string;
  @IsNotEmpty()
  @IsUUID()
  badge_id: string;
}

export { BadgeOnTutorialDTO };
