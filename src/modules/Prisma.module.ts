import { Global, Module } from '@nestjs/common';
import { PrismaConfig } from 'src/databaseORM/prisma.config';

@Global()
@Module({
  imports: [],
  providers: [PrismaConfig],
  exports: [PrismaConfig],
})
export class PrismaModule {}
