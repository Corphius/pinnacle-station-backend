import { Injectable } from '@nestjs/common';

@Injectable()
class AuthService {
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
