import { Healthcheck } from '../../../../core/entities/healthcheck/healthcheck';

describe('Healthcheck', () => {
  it('should create a healthcheck with correct values', () => {
    const healthcheck = new Healthcheck();
    healthcheck.server_health = 'OK';
    healthcheck.database_health = 'OK';
    healthcheck.date = new Date().toISOString();
    healthcheck.error = null;

    expect(healthcheck.server_health).toEqual('OK');
    expect(healthcheck.database_health).toEqual('OK');
    expect(healthcheck.date).toBeTruthy();
    expect(healthcheck.error).toBeNull();
  });
});
