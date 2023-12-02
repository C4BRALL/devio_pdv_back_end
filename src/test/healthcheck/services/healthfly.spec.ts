import { Test, TestingModule } from '@nestjs/testing';
import { HttpException, HttpStatus } from '@nestjs/common';
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
      it('should call the GetHealth health method and return its result', async () => {
        const result = {
          server_health: 'ok',
          database_health: 'ok',
          date: '2023-12-01T00:00:00.000Z',
        };
        getHealth.health.mockResolvedValue(result);

        const actualResult = await healthcheckService.healthfly();

        expect(getHealth.health).toHaveBeenCalled();
        expect(actualResult).toBe(result);
      });

      it('should return the error if the GetHealth health method throws an error', async () => {
        const errorResponse = {
          response: {
            server_health: 'ok',
            database_health: 'failed connection database',
            date: '2023-12-02T18:59:06.087Z',
            error: {
              name: 'PrismaClientKnownRequestError',
              code: 'P1001',
              clientVersion: '5.6.0',
              meta: {
                database_host: 'localhost',
                database_port: 5001,
              },
            },
          },
          status: 424,
          message: 'Http Exception',
          name: 'HttpException',
        };
        const error = new HttpException(
          errorResponse,
          HttpStatus.FAILED_DEPENDENCY,
        );
        getHealth.health.mockImplementation(() => {
          throw error;
        });

        try {
          await healthcheckService.healthfly();
        } catch (e) {
          expect(getHealth.health).toHaveBeenCalled();
          expect(e).toBeInstanceOf(HttpException);
          expect(e.getStatus()).toBe(HttpStatus.FAILED_DEPENDENCY);
          expect(e.getResponse()).toEqual(errorResponse);
        }
      });
    });
  });
});
