import { BadgeUpdateDTO } from 'src/dtos/Badge/Badge.update.dto';
import { BadgeModel } from 'src/models/Badge.model';

export interface IBadgeRepository {
  create(data: BadgeModel): Promise<BadgeModel>;
  updateById(id: string, badgeUpdateDTO: BadgeUpdateDTO): Promise<BadgeModel>;
  getAllRegisters(filters?: object): Promise<BadgeModel[]>;
  getById(id: string): Promise<BadgeModel>;
  deleteById(id: string): void;
}
