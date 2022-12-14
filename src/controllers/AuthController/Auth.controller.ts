import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { IsPublic } from 'src/decorators/is-public.decorator';
import { LocalAuthGuard } from 'src/guards/local-auth.guard';
import { AuthService } from 'src/services/Auth.service';
import { UserREQUESTAuth } from './requests/User.auth.dto';

@Controller()
@ApiTags('AUTHENTICATE')
class AuthController {
  constructor(private authService: AuthService) {}
  @IsPublic()
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    description: 'OK',
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal Server Error',
  })
  @ApiNotFoundResponse({
    description: 'Not Found',
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
  })
  async login(@Request() @Body() req: UserREQUESTAuth) {
    return await this.authService.login(req);
  }
}

export { AuthController };
