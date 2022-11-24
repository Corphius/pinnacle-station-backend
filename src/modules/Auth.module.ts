import { Module } from '@nestjs/common';
import { AuthController } from 'src/controllers/AuthController/Auth.controller';
import { GoogleStrategy } from 'src/strategies/google/GoogleStrategy';
import { AuthService } from 'src/services/Auth.service';
import { UserModule } from './User.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from 'src/strategies/local/local.strategy';
import { GoogleController } from 'src/controllers/AuthController/Google.controller';
import { jwtConstants } from 'src/constants/auth.constants';
import { JwtStrategy } from 'src/strategies/jwt/jwt.strategy';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController, GoogleController],
  providers: [AuthService, GoogleStrategy, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
