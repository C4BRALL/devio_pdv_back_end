import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { HealthcheckService } from '../healthcheck.service';

@Controller()
export class HealthcheckController {
  constructor(private readonly healthcheckService: HealthcheckService) {}

  @Get('health')
  async getHealth(): Promise<object> {
    try {
      return this.healthcheckService.healthfly();
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
