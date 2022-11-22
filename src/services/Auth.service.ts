import { Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';
import { ServiceException } from 'src/exceptions/Service.exception';
import { UserService } from './User.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findUserByEmail({ email });
    if (user) {
      const isPasswordValid = await compare(pass, user.password);

      if (isPasswordValid) {
        return { ...user, pass: undefined };
      }
    }
    throw new Error('email or pass dont match');
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  googleLogin(req) {
    console.log('->req ', req);
    if (!req.user) {
      return 'no user from google';
    }

    return {
      message: 'user information from google DESCOM',
      user: req.user,
    };
  }
}

export { AuthService };
