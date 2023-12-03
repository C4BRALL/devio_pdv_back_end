import { Healthcheck } from 'src/core/entities/healthcheck/healthcheck';

export abstract class GetHealthUsecase {
  abstract health(): Promise<GetHealthUsecase.Result>;
}

export namespace GetHealthUsecase {
  export type Result = Healthcheck;
}
