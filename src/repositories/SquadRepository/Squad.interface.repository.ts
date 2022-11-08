import { SquadUpdateDTO } from 'src/dtos/Squad/Squad.update.dto';
import { SquadModel } from 'src/models/Squad.model';

export interface ISquadRepository {
  create(data: SquadModel): Promise<SquadModel>;
  updateById(id: string, squadUpdateDTO: SquadUpdateDTO): Promise<SquadModel>;
  getAllRegisters(filters?: object): Promise<SquadModel[]>;
  getById(id: string): Promise<SquadModel>;
  deleteById(id: string): void;
}
