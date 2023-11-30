import { Controller, Get } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller()
export class HealthcheckController {
  constructor(private readonly appService: AppService) {}

  @Get('healthfly')
  getHealth(): object {
    return this.appService.getHealthfly();
  }
}
