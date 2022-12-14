import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IsPublic } from 'src/decorators/is-public.decorator';

@ApiTags('Health')
@Controller('health')
@IsPublic()
class HealthController {
  @Get()
  check() {
    return {
      health: true,
    };
  }
}

export { HealthController };
