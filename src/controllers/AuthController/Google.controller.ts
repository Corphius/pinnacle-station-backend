import { Controller, Get, Req, Request, UseGuards } from '@nestjs/common';
import { GoogleOAuthGuard } from 'src/guards/google-auth.guard';
import { AuthService } from 'src/services/Auth.service';

@Controller('google')
class GoogleController {
  constructor(private readonly authService: AuthService) {}
  @Get()
  @UseGuards(GoogleOAuthGuard)
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async googleAuth(@Request() req) {
    console.log(' -> googleAuth', req);
  }

  @Get('redirect')
  //@UseGuards(GoogleOAuthGuard)
  googleAuthRedirect(@Request() req) {
    console.log('req -> controller ', req);
    return this.authService.googleLogin(req);
  }
}

export { GoogleController };
