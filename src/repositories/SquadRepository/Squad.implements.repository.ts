import { SquadModel } from 'src/models/Squad.model';
import { ISquadRepository } from './Squad.interface.repository';

class SquadRepository implements ISquadRepository {
  create(data: SquadModel): Promise<SquadModel> {
    throw new Error('Method not implemented.');
  }
  getAllRegisters(filters?: object): Promise<SquadModel[]> {
    throw new Error('Method not implemented.');
  }
  getById(id: string): Promise<SquadModel> {
    throw new Error('Method not implemented.');
  }
  deleteById(id: string): void {
    throw new Error('Method not implemented.');
  }
}

export { SquadRepository };
