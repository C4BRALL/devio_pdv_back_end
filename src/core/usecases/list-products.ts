import { Products } from '../entities/pdv/product';

export abstract class ListProductsUsecase {
  abstract findAll(): Promise<ListProductsUsecase.Result>;
}

export namespace ListProductsUsecase {
  export type Result = Products;
}
