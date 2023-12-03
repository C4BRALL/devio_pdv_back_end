import { Products } from '../entities/pdv/product';

export abstract class ListProductsUsecase {
  abstract findAll(
    params: ListProductsUsecase.Params,
  ): Promise<ListProductsUsecase.Result>;
}

export namespace ListProductsUsecase {
  export type Params = {
    take: number;
    skip: number;
  };
  export type Result = Products[];
}
