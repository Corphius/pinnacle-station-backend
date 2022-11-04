import { SquadModel } from 'src/models/Squad.model';

export interface ISquadRepository {
  create(data: SquadModel): Promise<SquadModel>;
  getAllRegisters(filters?: object): Promise<SquadModel[]>;
  getById(id: string): Promise<SquadModel>;
  deleteById(id: string): void;
}
