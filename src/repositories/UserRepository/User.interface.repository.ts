import { UserModel } from 'src/models/User.model';

export interface IUserRepository {
  create(data: UserModel): Promise<UserModel>;
  findByEmail(email: string): Promise<UserModel>;
  findById(id: string): Promise<UserModel>;
}
