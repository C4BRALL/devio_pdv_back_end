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
    additional: string[];
    status: StatusOrder;
    customer: string;
    groupOrderCode: string;
    payment_method: PaymentMethod;
    total_price: number;
    amount: number;
    change: number;
  };
  export type Result = { id: string };
}

export enum StatusOrder {
  PENDING = 'PENDING',
  CANCELED = 'CANCELED',
  PROGRESS = 'PROGRESS',
  COMPLETED = 'COMPLETED',
  WITHDRAWAL = 'WITHDRAWAL',
}

export enum PaymentMethod {
  CREDITCARD = 'CREDITCARD',
  DEBITCARD = 'DEBITCARD',
  MONEY = 'MONEY',
}
