import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { HealthcheckService } from '../healthcheck.service';
import { GetHealthRepository } from '../repositories/protocols/get-health-repository';

@Controller()
@ApiTags('Healthcheck')
export class HealthcheckController {
  constructor(private readonly healthcheckService: HealthcheckService) {}

  @Get('health')
  @ApiResponse({
    status: 200,
    schema: {
      example: {
        server_health: 'ok',
        database_health: 'ok',
        date: '2023-12-01T00:00:00.000Z',
      },
    },
  })
  @ApiResponse({
    status: 424,
    schema: {
      example: {
        response: {
          server_health: 'ok',
          database_health: 'failed connection database',
          date: '2023-12-02T18:59:06.087Z',
          error: 'UNKNOWN',
        },
        status: 424,
        message: 'Http Exception',
        name: 'HttpException',
      },
    },
  })
  async getHealth(): Promise<GetHealthRepository.Result> {
    try {
      return this.healthcheckService.healthfly();
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
