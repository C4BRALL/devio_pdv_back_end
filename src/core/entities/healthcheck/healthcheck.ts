import { ApiProperty } from '@nestjs/swagger';

export class Healthcheck {
  /**
   * verifica se o aplicação está em funcionando corretamente
   */
  @ApiProperty()
  server_health: string;

  database_health: string;

  date: string;

  error?: unknown;
}
