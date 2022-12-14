import { Module } from '@nestjs/common';
import { HealthController } from 'src/controllers/HealthController/Health.controller';

@Module({
  imports: [],
  controllers: [HealthController],
  providers: [],
})
export class HealthModule {}
