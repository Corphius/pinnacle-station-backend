import { Module } from '@nestjs/common';
import { SquadController } from 'src/controllers/SquadController/Squad.controller';
import { SquadRepository } from 'src/repositories/SquadRepository/Squad.implements.repository';
import { SquadService } from 'src/services/Squad.service';

@Module({
  imports: [],
  controllers: [SquadController],
  providers: [
    SquadService,
    { provide: 'ISquadRepository', useClass: SquadRepository },
  ],
})
export class SquadModule {}
