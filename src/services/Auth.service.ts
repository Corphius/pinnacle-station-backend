import { Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';
import { ServiceException } from 'src/exceptions/Service.exception';
import { UserService } from './User.service';
import { JwtService } from '@nestjs/jwt';
import { UserCreateDTO } from 'src/dtos/User/User.create.dto';
import { GenericException } from 'src/exceptions/Generic.exception';
import { ErrorCodes } from 'src/exceptions/contracts/ErrorCode.interface';
import { LoginException } from 'src/exceptions/Login.execption';

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
    throw new LoginException('test');
  }

  async googleLogin(req) {
    if (!req.user) {
      return 'no user from google';
    }
    const objectUser: UserCreateDTO = {
      email: req.user.email,
      name: req.user.name,
      password: req.user.password,
    };

    const userFromGoogle = await this.usersService.create(objectUser);

    return {
      message: 'user information from google DESCOM',
      user: req.user,
      access_token: this.jwtService.sign({
        email: userFromGoogle.email,
      }),
    };
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

export { AuthService };
