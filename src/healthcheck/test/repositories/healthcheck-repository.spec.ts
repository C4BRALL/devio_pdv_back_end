import { Test, TestingModule } from '@nestjs/testing';
import { HealthcheckRepository } from '../../repositories/healthcheck-repository';

describe('HealthcheckRepository', () => {
  let healthcheckRepository: HealthcheckRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthcheckRepository],
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
      it('should return server health status and current date', () => {
        const result = healthcheckRepository.health();

        expect(result.server_health).toEqual('ok');
        expect(result).toHaveProperty('date');
        expect(new Date(result.date)).toBeInstanceOf(Date);
      });

      it('should handle errors', () => {
        const error = new Error('Test error');
        jest.spyOn(global, 'Date').mockImplementationOnce(() => {
          throw error;
        });
        const result = healthcheckRepository.health();
        expect(result).toBe(error);
      });
    });
  });
});
