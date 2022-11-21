import { Module } from '@nestjs/common';
import { ActivityModule } from './modules/Activity.module';
import { AuthModule } from './modules/Auth.module';
import { BadgeModule } from './modules/Badge.module';
import { PrismaModule } from './modules/Prisma.module';
import { QuestionModule } from './modules/Question.module';

import { SquadModule } from './modules/Squad.module';
import { TutorialModule } from './modules/Tutorial.module';
import { UserModule } from './modules/User.module';

@Module({
  imports: [
    SquadModule,
    PrismaModule,
    ActivityModule,
    TutorialModule,
    QuestionModule,
    BadgeModule,
    AuthModule,
    UserModule,
  ],
})
export class AppModule {}
