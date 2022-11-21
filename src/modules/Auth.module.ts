import { Module } from '@nestjs/common';
import { AuthController } from 'src/controllers/AuthController/Auth.controller';
import { GoogleStrategy } from 'src/strategies/google/GoogleStrategy';
import { AuthService } from 'src/services/Auth.service';
import { UserModule } from './User.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from 'src/strategies/local/Local.strategy';
import { GoogleController } from 'src/controllers/AuthController/Google.controller';

@Module({
  imports: [UserModule, PassportModule],
  controllers: [AuthController, GoogleController],
  providers: [AuthService, GoogleStrategy, LocalStrategy],
})
export class AuthModule {}
