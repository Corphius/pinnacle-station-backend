import { Module } from '@nestjs/common';
import { BadgeController } from 'src/controllers/BadgeController/Badge.controller';
import { BadgeRepository } from 'src/repositories/BadgeRepository/Badge.implements.repository';
import { BadgeService } from 'src/services/Badge.service';

@Module({
  imports: [],
  controllers: [BadgeController],
  providers: [
    BadgeService,
    { provide: 'IBadgeRepository', useClass: BadgeRepository },
  ],
})
export class BadgeModule {}
