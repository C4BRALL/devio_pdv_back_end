import { Orders } from 'src/core/entities/pdv/orders';

export abstract class ListOrdersUsecase {
  abstract findAll(
    params?: ListOrdersUsecase.Params,
  ): Promise<ListOrdersUsecase.Result>;
}

export namespace ListOrdersUsecase {
  export type Params = {
    status?: 'PENDING' | 'CANCELED' | 'PROGRESS' | 'COMPLETED' | 'WITHDRAWAL';
  };
  export type Result = Orders[];
}
