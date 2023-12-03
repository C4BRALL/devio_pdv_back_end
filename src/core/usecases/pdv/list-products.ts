import { Product } from '../../entities/pdv/product';

export abstract class ListProductsUsecase {
  abstract findAll(
    params: ListProductsUsecase.Params,
  ): Promise<ListProductsUsecase.Result>;
}

export namespace ListProductsUsecase {
  export type Params = {
    search?: string;
    take?: number;
    skip?: number;
  };
  export type Result = Product[];
}
