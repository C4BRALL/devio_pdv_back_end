import { Injectable } from '@nestjs/common';
import { GetHealthUsecase } from '../core/usecases/healthcheck/get-health';

@Injectable()
export class HealthcheckService {
  constructor(private readonly getHealth: GetHealthUsecase) {}

  async healthfly(): Promise<GetHealthUsecase.Result> {
    try {
      return await this.getHealth.health();
    } catch (error) {
      return error;
    }
  }
}
