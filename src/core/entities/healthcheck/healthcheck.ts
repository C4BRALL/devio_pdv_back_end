export type Healthcheck = {
  server_health: string;
  database_health: string;
  date: string;
  error?: unknown;
};
