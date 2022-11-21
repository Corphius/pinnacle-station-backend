import { Controller, Get, Post, Req, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from 'src/guards/local-auth.guard';

@Controller()
class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }
}

export { AuthController };
