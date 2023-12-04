import { CreateOrderUsecase } from '../../../core/usecases/pdv/create-order';

export abstract class CreateOrderRepository extends CreateOrderUsecase {
  abstract create(
    params: CreateOrderRepository.Params,
  ): Promise<CreateOrderRepository.Result>;
}

export namespace CreateOrderRepository {
  export type Params = CreateOrderUsecase.Params[];
  export type Result = CreateOrderUsecase.Result[];
}
