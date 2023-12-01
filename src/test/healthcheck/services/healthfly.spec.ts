import { Test, TestingModule } from '@nestjs/testing';
import { HealthcheckService } from '../../../healthcheck/healthcheck.service';
import { GetHealth } from '../../../core/usecases/get-health';

describe('HealthcheckService', () => {
  let healthcheckService: HealthcheckService;
  let getHealth: jest.Mocked<GetHealth>;

  beforeEach(async () => {
    getHealth = {
      health: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HealthcheckService,
        { provide: GetHealth, useValue: getHealth },
      ],
    }).compile();

    healthcheckService = module.get<HealthcheckService>(HealthcheckService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('HealthcheckService', () => {
    describe('healthfly', () => {
      it('should call the GetHealth health method and return its result', () => {
        const result = {
          server_health: 'ok',
          date: '2023-12-01T00:00:00.000Z',
        };
        getHealth.health.mockReturnValue(result);

        const actualResult = healthcheckService.healthfly();

        expect(getHealth.health).toBeCalled();
        expect(actualResult).toBe(result);
      });

      it('should return the error if the GetHealth health method throws an error', () => {
        const error = new Error('Test error');
        getHealth.health.mockImplementation(() => {
          throw error;
        });

        const actualResult = healthcheckService.healthfly();

        expect(getHealth.health).toBeCalled();
        expect(actualResult).toBe(error);
      });
    });
  });
});
