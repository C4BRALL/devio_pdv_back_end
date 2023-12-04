export abstract class CreateOrderUsecase {
  abstract create(
    params: CreateOrderUsecase.Params[],
  ): Promise<CreateOrderUsecase.Result[]>;
}

export namespace CreateOrderUsecase {
  export type Params = {
    description: string;
    product_id: string;
    quantity: number;
    additional?: string[];
    status?: 'PENDING' | 'CANCELED' | 'PROGRESS' | 'COMPLETED' | 'WITHDRAWAL';
    customer: string;
    payment_method: 'CREDITCARD' | 'DEBITCARD' | 'MONEY';
    total_price: number;
    amount: number;
    change: number;
  };
  export type Result = { id: string };
}
