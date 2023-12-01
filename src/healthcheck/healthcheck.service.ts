import { Injectable } from '@nestjs/common';
import { GetHealth } from '../core/usecases/get-health';

@Injectable()
export class HealthcheckService {
  constructor(private readonly getHealth: GetHealth) {}

  healthfly(): GetHealth.Result {
    try {
      return this.getHealth.health();
    } catch (error) {
      return error;
    }
  }
}
