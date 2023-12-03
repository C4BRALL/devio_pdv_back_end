import { ApiProperty } from '@nestjs/swagger';
import { PaymentMethod, StatusOrder } from 'src/core/usecases/pdv/create-order';

export class CreateOrderDto {
  @ApiProperty()
  description: string;

  @ApiProperty()
  product_id: string;

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  additional: string[];

  @ApiProperty()
  status: StatusOrder;

  @ApiProperty()
  customer: string;

  @ApiProperty()
  groupOrderCode: string;

  @ApiProperty()
  payment_method: PaymentMethod;

  @ApiProperty()
  total_price: number;

  @ApiProperty()
  amount: number;

  @ApiProperty()
  change: number;
}
