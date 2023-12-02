import { Module } from '@nestjs/common';
import { PrismaModule } from './config/prisma/prisma.module';
import { PdvModule } from './pdv/pdv.module';
import { HealthcheckModule } from './healthcheck/healthcheck.module';
import { ApiModule } from './api/api.module';

@Module({
  imports: [PrismaModule, PdvModule, HealthcheckModule, ApiModule],
})
export class AppModule {}
