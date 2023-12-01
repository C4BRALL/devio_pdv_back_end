import { Injectable } from '@nestjs/common';
import { GetHealthRepository } from './protocols/get-health-repository';

@Injectable()
export class HealthcheckRepository implements GetHealthRepository {
  health(): GetHealthRepository.Result {
    try {
      const date = new Date().toISOString();
      return {
        server_health: 'ok',
        date,
      };
    } catch (error) {
      return error;
    }
  }
}
