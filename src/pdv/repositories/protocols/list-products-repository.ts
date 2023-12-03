import { ListProductsUsecase } from 'src/core/usecases/list-products';

export abstract class ListProductsRepository {
  abstract findAll(
    params: ListProductsRepository.Params,
  ): Promise<ListProductsRepository.Result>;
}

export namespace ListProductsRepository {
  export type Params = ListProductsUsecase.Params;
  export type Result = ListProductsUsecase.Result;
}
