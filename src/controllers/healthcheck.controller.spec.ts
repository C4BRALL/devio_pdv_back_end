import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from '../app.service';
import { HealthcheckController } from './healthcheck.controller';

describe('HealthcheckController', () => {
  let healthcheckController: HealthcheckController;

  const mockAppService = {
    getHealthfly: jest.fn().mockImplementation(() => {
      return {
        server_health: 'ok',
        date: '2023-11-30T18:12:57.165Z',
      };
    }),
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HealthcheckController],
      providers: [
        {
          provide: AppService,
          useValue: mockAppService,
        },
      ],
    }).compile();

    healthcheckController = app.get<HealthcheckController>(
      HealthcheckController,
    );
  });

  describe('root', () => {
    it('should return {server_health: "ok", date: string}', () => {
      expect(healthcheckController.getHealth()).toMatchObject({
        server_health: 'ok',
        date: '2023-11-30T18:12:57.165Z',
      });
    });
  });
});
