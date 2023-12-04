import { UpdateOrderStatusUsecase } from '../../../core/usecases/pdv/update-order-status';

export abstract class UpdateOrderStatusRepository extends UpdateOrderStatusUsecase {
  abstract updateStatus(
    params: UpdateOrderStatusRepository.Params,
  ): Promise<UpdateOrderStatusRepository.Result>;
}

export namespace UpdateOrderStatusRepository {
  export type Params = UpdateOrderStatusUsecase.Params;
  export type Result = UpdateOrderStatusUsecase.Result;
}
