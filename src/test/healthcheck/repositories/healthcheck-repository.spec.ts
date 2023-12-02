import { Test, TestingModule } from '@nestjs/testing';
import { HealthcheckRepository } from '../../../healthcheck/repositories/healthcheck-repository';
import { PrismaService } from '../../../config/prisma/prisma.service';

describe('HealthcheckRepository', () => {
  let healthcheckRepository: HealthcheckRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthcheckRepository, PrismaService],
    }).compile();

    healthcheckRepository = module.get<HealthcheckRepository>(
      HealthcheckRepository,
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('HealthcheckRepository', () => {
    describe('health', () => {
      it('should return server health status and current date', async () => {
        const result = await healthcheckRepository.health();

        expect(result.server_health).toEqual('ok');
        expect(result).toHaveProperty('date');
        expect(new Date(result.date)).toBeInstanceOf(Date);
      });
    });
  });
});
