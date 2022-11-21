import { Module } from '@nestjs/common';

import { UserController } from 'src/controllers/UserController/User.controller';
import { UserRepository } from 'src/repositories/UserRepository/User.implements.repositoy';
import { UserService } from 'src/services/User.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    UserService,
    { provide: 'IUserRepository', useClass: UserRepository },
  ],
  exports: [UserService],
})
export class UserModule {}
