import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HealthCheckService, HealthCheck } from '@nestjs/terminus';
import { IsPublic } from 'src/decorators/is-public.decorator';

@ApiTags('Health')
@Controller('health')
@IsPublic()
class HealthController {
  constructor(private heath: HealthCheckService) {}

  @Get()
  @HealthCheck()
  check() {
    return this.heath.check([]);
  }
}

export { HealthController };
