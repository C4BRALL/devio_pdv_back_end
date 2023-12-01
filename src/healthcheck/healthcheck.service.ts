import { Injectable } from '@nestjs/common';
import { GetHealth } from 'src/core/usecases/get-health';

@Injectable()
export class HealthcheckService {
  constructor(private readonly getHealth: GetHealth) {}

  healthfly(): GetHealth.Result {
    try {
      return this.getHealth.health();
      // return {
      //   server_health: 'sadaa',
      //   date: 'ada',
      // };
    } catch (error) {
      return error;
    }
  }
}
