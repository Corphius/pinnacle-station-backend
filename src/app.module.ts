import { Module } from '@nestjs/common';
import { ActivityModule } from './modules/Activity.module';
import { PrismaModule } from './modules/Prisma.module';

import { SquadModule } from './modules/Squad.module';
import { TutorialModule } from './modules/Tutorial.module';

@Module({
  imports: [SquadModule, PrismaModule, ActivityModule, TutorialModule],
})
export class AppModule {}
