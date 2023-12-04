import { ListProductsUsecase } from '../../../core/usecases/pdv/list-products';

export abstract class ListProductsRepository extends ListProductsUsecase {
  abstract findAll(
    params: ListProductsRepository.Params,
  ): Promise<ListProductsRepository.Result>;
}

export namespace ListProductsRepository {
  export type Params = ListProductsUsecase.Params;
  export type Result = ListProductsUsecase.Result;
}
