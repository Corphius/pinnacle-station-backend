import { ActivitiesCreateDTO } from 'src/dtos/Activities/Activities.create.dto';
import { ActivityModel } from 'src/models/Activities.model';

export const createActivityDTOforModel = (
  activitiesCreateDTO: ActivitiesCreateDTO,
) => {
  return new ActivityModel({
    ...activitiesCreateDTO,
  });
};
