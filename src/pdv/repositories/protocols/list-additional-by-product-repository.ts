import { ListAdditionalByProductUsecase } from 'src/core/usecases/pdv/list-additional-by-product';

export abstract class ListAdditionalByProductRepository extends ListAdditionalByProductUsecase {
  abstract findAdditional(
    params: ListAdditionalByProductRepository.Params,
  ): Promise<ListAdditionalByProductRepository.Result>;
}

export namespace ListAdditionalByProductRepository {
  export type Params = ListAdditionalByProductUsecase.Params;
  export type Result = ListAdditionalByProductUsecase.Result;
}
