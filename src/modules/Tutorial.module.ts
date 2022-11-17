import { Module } from '@nestjs/common';
import { TutorialController } from 'src/controllers/TutorialController/Tutorial.controller';
import { BadgeRepository } from 'src/repositories/BadgeRepository/Badge.implements.repository';
import { TutorialRepository } from 'src/repositories/TutorialRepository/Tutorial.implements.repository';
import { BadgeService } from 'src/services/Badge.service';
import { TutorialService } from 'src/services/Tutorial.service';

@Module({
  imports: [],
  controllers: [TutorialController],
  providers: [
    TutorialService,
    { provide: 'ITutorialRepository', useClass: TutorialRepository },
    BadgeService,
    { provide: 'IBadgeRepository', useClass: BadgeRepository },
  ],
})
export class TutorialModule {}
