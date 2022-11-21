import { Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';
import { ServiceException } from 'src/exceptions/Service.exception';
import { UserService } from './User.service';

@Injectable()
class AuthService {
  constructor(private usersService: UserService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findUserByEmail({ email });
    // const passwordMatch = await compare(pass, user.password);

    // if (!passwordMatch) {
    //   throw new ServiceException('Email or password incorrect!');
    // }

    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  googleLogin(req) {
    if (!req.user) {
      return 'no user from google';
    }

    return {
      message: 'user information from google',
      user: req.user,
    };
  }
}

export { AuthService };
