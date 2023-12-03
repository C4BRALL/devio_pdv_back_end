import { ListCategoriesUsecase } from 'src/core/usecases/pdv/list-categories';

export abstract class ListCategoriesRepository extends ListCategoriesUsecase {
  abstract findAll(
    params: ListCategoriesRepository.Params,
  ): Promise<ListCategoriesRepository.Result>;
}

export namespace ListCategoriesRepository {
  export type Params = ListCategoriesUsecase.Params;
  export type Result = ListCategoriesUsecase.Result;
}
