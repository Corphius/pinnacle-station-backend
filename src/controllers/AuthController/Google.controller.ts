import { Controller, Get, Req, Request, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IsPublic } from 'src/decorators/is-public.decorator';
import { GoogleOAuthGuard } from 'src/guards/google-auth.guard';
import { AuthService } from 'src/services/Auth.service';

@Controller('google')
@ApiTags('AUTH')
class GoogleController {
  constructor(private readonly authService: AuthService) {}
  @IsPublic()
  @Get()
  @UseGuards(GoogleOAuthGuard)
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async googleAuth(@Request() req) {}

  @IsPublic()
  @Get('redirect')
  //@UseGuards(GoogleOAuthGuard)
  googleAuthRedirect(@Request() req) {
    return this.authService.googleLogin(req);
  }
}

export { GoogleController };
