import { ListProductsByCategoryUsecase } from '../../../core/usecases/pdv/list-products-by-category';

export abstract class ListProductsByCategoryRepository extends ListProductsByCategoryUsecase {
  abstract findByCategory(
    params: ListProductsByCategoryRepository.Params,
  ): Promise<ListProductsByCategoryRepository.Result>;
}

export namespace ListProductsByCategoryRepository {
  export type Params = ListProductsByCategoryUsecase.Params;
  export type Result = ListProductsByCategoryUsecase.Result;
}
