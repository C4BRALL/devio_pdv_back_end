import { Injectable } from '@nestjs/common';
import { GetHealth } from '../core/usecases/get-health';

@Injectable()
export class HealthcheckService {
  constructor(private readonly getHealth: GetHealth) {}

  async healthfly(): Promise<GetHealth.Result> {
    try {
      return await this.getHealth.health();
    } catch (error) {
      return error;
    }
  }
}
