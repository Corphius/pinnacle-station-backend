import { Module } from '@nestjs/common';
import { TutorialController } from 'src/controllers/TutorialController/Tutorial.controller';
import { TutorialRepository } from 'src/repositories/TutorialRepository/Tutorial.implements.repository';
import { TutorialService } from 'src/services/Tutorial.service';

@Module({
  imports: [],
  controllers: [TutorialController],
  providers: [
    TutorialService,
    { provide: 'ISquadRepository', useClass: TutorialRepository },
  ],
})
export class SquadModule {}
