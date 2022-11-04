import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/Prisma.module';

import { SquadModule } from './modules/Squad.module';

@Module({
  imports: [SquadModule, PrismaModule],
})
export class AppModule {}
