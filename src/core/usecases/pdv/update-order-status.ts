export abstract class UpdateOrderStatusUsecase {
  abstract updateStatus(
    params: UpdateOrderStatusUsecase.Params,
  ): Promise<UpdateOrderStatusUsecase.Result>;
}

export namespace UpdateOrderStatusUsecase {
  export type Params = {
    id: string;
    newStatus: 'PENDING' | 'CANCELED' | 'PROGRESS' | 'COMPLETED' | 'WITHDRAWAL';
  };

  export type Result = {
    id: string;
    product: {
      name: string;
    };
    status: 'PENDING' | 'CANCELED' | 'PROGRESS' | 'COMPLETED' | 'WITHDRAWAL';
  };
}
