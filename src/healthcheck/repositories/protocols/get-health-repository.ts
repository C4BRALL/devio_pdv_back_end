import { GetHealthUsecase } from '../../../core/usecases/healthcheck/get-health';

export abstract class GetHealthRepository extends GetHealthUsecase {
  abstract health(): Promise<GetHealthRepository.Result>;
}

export namespace GetHealthRepository {
  export type Result = GetHealthUsecase.Result;
}
