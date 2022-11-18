import { Inject } from '@nestjs/common';
import { UserCreateDTO } from 'src/dtos/User/User.create.dto';
import { GenericException } from 'src/exceptions/Generic.exception';
import { ServiceException } from 'src/exceptions/Service.exception';
import { IUserRepository } from 'src/repositories/UserRepository/User.interface.repository';
import { createUserDTOforModel } from './servicesMappers/User.mapper';

class UserService {
  SERVICE_NAME = 'USER_SERVICE';

  constructor(
    @Inject('IUserRepository')
    private userRepository: IUserRepository,
  ) {}

  async create(userCreateDTO: UserCreateDTO) {
    try {
      return await this.userRepository.create(
        await createUserDTOforModel(userCreateDTO),
      );
    } catch (error) {
      console.log(error);
      if (error instanceof GenericException) throw error;
      throw new ServiceException(this.SERVICE_NAME);
    }
  }
}

export { UserService };
