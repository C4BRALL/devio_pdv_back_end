import { ApiProperty } from '@nestjs/swagger';

export class Healthcheck {
  @ApiProperty()
  server_health: string;

  @ApiProperty()
  database_health: string;

  @ApiProperty()
  date: string;

  @ApiProperty()
  error?: unknown;
}
