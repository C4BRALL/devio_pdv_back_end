import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from '../../config/prisma/prisma.service';
import { GetHealthRepository } from './protocols/get-health-repository';

@Injectable()
export class HealthcheckRepository implements GetHealthRepository {
  constructor(private readonly prisma: PrismaService) {}

  async health(): Promise<GetHealthRepository.Result> {
    try {
      await this.prisma.product.findFirst();
      const date = new Date().toISOString();
      return {
        server_health: 'ok',
        database_health: 'ok',
        date,
      };
    } catch (error) {
      const date = new Date().toISOString();
      throw new HttpException(
        {
          server_health: 'ok',
          database_health: 'failed connection database',
          date,
          error,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
