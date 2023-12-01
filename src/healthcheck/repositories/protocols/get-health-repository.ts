import { GetHealth } from 'src/core/usecases/get-health';

export abstract class GetHealthRepository {
  abstract health(): GetHealthRepository.Result;
}

export namespace GetHealthRepository {
  export type Result = GetHealth.Result;
}