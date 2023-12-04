import { ListOrdersUsecase } from '../../../core/usecases/pdv/list-orders';

export abstract class ListOrdersRepository extends ListOrdersUsecase {
  abstract findAll(
    params?: ListOrdersRepository.Params,
  ): Promise<ListOrdersRepository.Result>;
}

export namespace ListOrdersRepository {
  export type Params = ListOrdersUsecase.Params;
  export type Result = ListOrdersUsecase.Result;
}
