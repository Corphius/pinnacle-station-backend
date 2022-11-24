import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { IsPublic } from 'src/decorators/is-public.decorator';
import { LocalAuthGuard } from 'src/guards/local-auth.guard';
import { AuthService } from 'src/services/Auth.service';

@Controller()
class AuthController {
  constructor(private authService: AuthService) {}
  @IsPublic()
  @Get('/')
  testing() {
    return 'HELLO World';
  }

  @IsPublic()
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  @HttpCode(HttpStatus.OK)
  async login(@Request() req) {
    return await this.authService.login(req.user);
  }
}

export { AuthController };
