import { Module } from '@nestjs/common';
import { ActivityController } from 'src/controllers/ActivityController/Activity.controller';
import { ActivityRepository } from 'src/repositories/ActivityRepository/Activity.implements.repository';
import { BadgeRepository } from 'src/repositories/BadgeRepository/Badge.implements.repository';
import { ActivityService } from 'src/services/Activity.service';
import { BadgeService } from 'src/services/Badge.service';

@Module({
  imports: [],
  controllers: [ActivityController],
  providers: [
    ActivityService,
    { provide: 'IActivityRepository', useClass: ActivityRepository },
    BadgeService,
    { provide: 'IBadgeRepository', useClass: BadgeRepository },
  ],
})
export class ActivityModule {}
