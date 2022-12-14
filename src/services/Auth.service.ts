import { Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';
import { UserService } from './User.service';
import { JwtService } from '@nestjs/jwt';
import { UserCreateDTO } from 'src/dtos/User/User.create.dto';
import { LoginException } from 'src/exceptions/ErrorImplements/Login.execption';
import { UserAuthDTO } from 'src/dtos/Auth/User.auth.dto';

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
    throw new LoginException();
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

  async login(user: UserAuthDTO) {
    const payload = { email: user.email, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

export { AuthService };
