import { Category } from '../../entities/pdv/category';

export abstract class ListCategoriesUsecase {
  abstract findAll(
    params: ListCategoriesUsecase.Params,
  ): Promise<ListCategoriesUsecase.Result>;
}

export namespace ListCategoriesUsecase {
  export type Params = {
    take?: number;
    skip?: number;
  };
  export type Result = Category[];
}
