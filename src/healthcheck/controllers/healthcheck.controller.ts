import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { HealthcheckService } from '../healthcheck.service';

@Controller()
export class HealthcheckController {
  constructor(private readonly healthcheckService: HealthcheckService) {}

  @Get('health')
  getHealth(): object {
    try {
      return this.healthcheckService.healthfly();
    } catch (error) {
      throw new HttpException(
        'Internal server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
