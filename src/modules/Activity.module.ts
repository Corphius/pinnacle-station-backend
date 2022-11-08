import { Module } from '@nestjs/common';
import { ActivityController } from 'src/controllers/ActivityController/Activity.controller';
import { ActivityRepository } from 'src/repositories/ActivityRepository/Activity.implements.repository';
import { ActivityService } from 'src/services/Activity.service';

@Module({
  imports: [],
  controllers: [ActivityController],
  providers: [
    ActivityService,
    { provide: 'IActivityRepository', useClass: ActivityRepository },
  ],
})
export class ActivityModule {}
