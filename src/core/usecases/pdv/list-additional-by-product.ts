import { Additional } from '../../../core/entities/pdv/additional';

export abstract class ListAdditionalByProductUsecase {
  abstract findAdditional(
    params: ListAdditionalByProductUsecase.Params,
  ): Promise<ListAdditionalByProductUsecase.Result>;
}

export namespace ListAdditionalByProductUsecase {
  export type Params = {
    id: string;
  };
  export type Result = Additional[];
}
