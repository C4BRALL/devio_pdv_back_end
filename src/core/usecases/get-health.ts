import { Healthcheck } from 'src/core/entities/healthcheck/healthcheck';

export abstract class GetHealth {
  abstract health(): GetHealth.Result;
}

export namespace GetHealth {
  export type Result = Healthcheck;
}
