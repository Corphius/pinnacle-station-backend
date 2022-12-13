import { Inject, Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { UserCreateDTO } from 'src/dtos/User/User.create.dto';
import { userEmailDTO } from 'src/dtos/User/User.email.dto';
import { GenericException } from 'src/exceptions/Error/Generic.exception';
import { NotFoundException } from 'src/exceptions/Error/NotFound.execption';
import { NotFoundEMailException } from 'src/exceptions/Error/NotFoundEmail.exception';
import { ServiceException } from 'src/exceptions/Error/Service.exception';

import { IUserRepository } from 'src/repositories/UserRepository/User.interface.repository';
import { createUserDTOforModel } from './servicesMappers/User.mapper';

@Injectable()
class UserService {
  SERVICE_NAME = 'USER_SERVICE';

  constructor(
    @Inject('IUserRepository')
    private userRepository: IUserRepository,
  ) {}

  async create(userCreateDTO: UserCreateDTO) {
    try {
      userCreateDTO.password = await hash(userCreateDTO.password, 10);

      return await this.userRepository.create(
        await createUserDTOforModel(userCreateDTO),
      );
    } catch (error) {
      console.log(error);
      if (error instanceof GenericException) throw error;
      throw new ServiceException(this.SERVICE_NAME);
    }
  }

  async findUserByEmail(email: userEmailDTO) {
    try {
      const user = await this.userRepository.findByEmail(email.email);

      if (!user) {
        throw new NotFoundEMailException(email.email);
      }
      return user;
    } catch (error) {
      console.log(error);
      if (error instanceof GenericException) throw error;
      throw new ServiceException(this.SERVICE_NAME);
    }
  }

  async findUserById(id: string) {
    try {
      const user = await this.userRepository.findById(id);

      if (!user) {
        throw new NotFoundException(id);
      }
      return user;
    } catch (error) {
      console.log(error);
      if (error instanceof GenericException) throw error;
      throw new ServiceException(this.SERVICE_NAME);
    }
  }
}

export { UserService };
