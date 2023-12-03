import { Module } from '@nestjs/common';
import { GetHealthUsecase } from '../core/usecases/healthcheck/get-health';
import { HealthcheckService } from './healthcheck.service';
import { HealthcheckController } from './controllers/healthcheck.controller';
import { HealthcheckRepository } from './repositories/healthcheck-repository';

@Module({
  providers: [
    HealthcheckService,
    {
      provide: GetHealthUsecase,
      useClass: HealthcheckRepository,
    },
  ],
  controllers: [HealthcheckController],
})
export class HealthcheckModule {}
