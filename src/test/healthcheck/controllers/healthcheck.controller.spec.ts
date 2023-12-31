import { Test, TestingModule } from '@nestjs/testing';
import { HealthcheckService } from '../../../healthcheck/healthcheck.service';
import { HealthcheckController } from '../../../healthcheck/controllers/healthcheck.controller';

describe('HealthcheckController', () => {
  let healthcheckController: HealthcheckController;

  const mockHealthcheckService = {
    healthfly: jest.fn().mockImplementation(() => {
      return {
        server_health: 'ok',
        database_health: 'ok',
        date: '2023-11-30T18:12:57.165Z',
      };
    }),
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HealthcheckController],
      providers: [
        {
          provide: HealthcheckService,
          useValue: mockHealthcheckService,
        },
      ],
    }).compile();

    healthcheckController = app.get<HealthcheckController>(
      HealthcheckController,
    );
  });

  describe('root', () => {
    it('should return {server_health: "ok", database_health: "ok", date: string}', async () => {
      expect(await healthcheckController.getHealth()).toMatchObject({
        server_health: 'ok',
        database_health: 'ok',
        date: '2023-11-30T18:12:57.165Z',
      });
    });
  });
});
