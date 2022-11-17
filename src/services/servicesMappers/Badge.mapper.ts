import { BadgeCreateDTO } from 'src/dtos/Badge/Badge.create.dto';
import { BadgeModel } from 'src/models/Badge.model';

export const createBadgeDTOforModel = (badgeCreateDTO: BadgeCreateDTO) => {
  return new BadgeModel({
    ...badgeCreateDTO,
  });
};
