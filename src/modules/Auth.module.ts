import { Module } from '@nestjs/common';
import { AuthController } from 'src/controllers/AuthController/Auth.controller';
import { GoogleStrategy } from 'src/strategies/google/GoogleStrategy';
import { AuthService } from 'src/services/Auth.service';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy],
})
export class AuthModule {}
