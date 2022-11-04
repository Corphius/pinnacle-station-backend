import { SquadCreateDTO } from 'src/dtos/Squad/Squad.create.dto';
import { SquadModel } from 'src/models/Squad.model';

export const createSquadDTOforModel = (squadCreateDTO: SquadCreateDTO) => {
  return new SquadModel({
    ...squadCreateDTO,
  });
};
