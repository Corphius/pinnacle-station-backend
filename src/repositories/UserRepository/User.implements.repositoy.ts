import { Injectable } from '@nestjs/common';
import { PrismaConfig } from 'src/databaseORM/prisma.config';
import { UserModel } from 'src/models/User.model';
import { IUserRepository } from './User.interface.repository';

@Injectable()
class UserRepository implements IUserRepository {
  constructor(private prismaConfig: PrismaConfig) {}

  create(data: UserModel): Promise<UserModel> {
    return this.prismaConfig.user.create({ data: data });
  }
  findByEmail(email: string): Promise<UserModel> {
    return this.prismaConfig.user.findUnique({
      where: { email: email },
    });
  }
  findById(id: string): Promise<UserModel> {
    return this.prismaConfig.user.findUnique({ where: { id: id } });
  }
}

export { UserRepository };
