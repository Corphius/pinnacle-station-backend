import { Module } from '@nestjs/common';
import { ActivityModule } from './modules/Activity.module';
import { PrismaModule } from './modules/Prisma.module';
import { QuestionModule } from './modules/Question.module';

import { SquadModule } from './modules/Squad.module';
import { TutorialModule } from './modules/Tutorial.module';

@Module({
  imports: [
    SquadModule,
    PrismaModule,
    ActivityModule,
    TutorialModule,
    QuestionModule,
  ],
})
export class AppModule {}
