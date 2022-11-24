import { UserCreateDTO } from 'src/dtos/User/User.create.dto';
import { UserModel } from 'src/models/User.model';

export const createUserDTOforModel = async (userCreateDTO: UserCreateDTO) => {
  return new UserModel({
    ...userCreateDTO,
  });
};
