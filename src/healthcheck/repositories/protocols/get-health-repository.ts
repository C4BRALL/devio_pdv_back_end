import { GetHealth } from 'src/core/usecases/get-health';

export abstract class GetHealthRepository {
  abstract health(): Promise<GetHealthRepository.Result>;
}

export namespace GetHealthRepository {
  export type Result = GetHealth.Result;
}
