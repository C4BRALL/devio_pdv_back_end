import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealthfly(): object {
    const date = new Date().toISOString();
    return {
      server_health: 'ok',
      date,
    };
  }
}
