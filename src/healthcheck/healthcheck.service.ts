import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { GetHealth } from '../core/usecases/get-health';

@Injectable()
export class HealthcheckService {
  constructor(private readonly getHealth: GetHealth) {}

  async healthfly(): Promise<GetHealth.Result> {
    try {
      return this.getHealth.health();
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
