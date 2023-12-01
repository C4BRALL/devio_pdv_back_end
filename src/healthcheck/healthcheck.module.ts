import { Module } from '@nestjs/common';
import { GetHealth } from '../core/usecases/get-health';
import { HealthcheckService } from './healthcheck.service';
import { HealthcheckController } from './controllers/healthcheck.controller';
import { HealthcheckRepository } from './repositories/healthcheck-repository';

@Module({
  providers: [
    HealthcheckService,
    {
      provide: GetHealth,
      useClass: HealthcheckRepository,
    },
  ],
  controllers: [HealthcheckController],
})
export class HealthcheckModule {}
