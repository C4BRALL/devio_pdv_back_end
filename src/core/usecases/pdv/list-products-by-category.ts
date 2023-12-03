import { Product } from '../../entities/pdv/product';

export abstract class ListProductsByCategoryUsecase {
  abstract findByCategory(
    params: ListProductsByCategoryUsecase.Params,
  ): Promise<ListProductsByCategoryUsecase.Result>;
}

export namespace ListProductsByCategoryUsecase {
  export type Params = {
    id: string;
    take?: number;
    skip?: number;
  };
  export type Result = Product[];
}
