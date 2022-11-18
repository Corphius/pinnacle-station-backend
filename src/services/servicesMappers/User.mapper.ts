import { hash } from 'bcrypt';
import { UserCreateDTO } from 'src/dtos/User/User.create.dto';
import { UserModel } from 'src/models/User.model';

export const createUserDTOforModel = async (userCreateDTO: UserCreateDTO) => {
  const hashpassword = await hash(userCreateDTO.password, 8);

  userCreateDTO.password = hashpassword;

  return new UserModel({
    ...userCreateDTO,
  });
};
