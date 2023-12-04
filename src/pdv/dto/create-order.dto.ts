import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty()
  description: string;

  @ApiProperty()
  product_id: string;

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  additional?: string[];

  @ApiProperty()
  status?: 'PENDING' | 'CANCELED' | 'PROGRESS' | 'COMPLETED' | 'WITHDRAWAL';

  @ApiProperty()
  customer: string;

  @ApiProperty()
  payment_method: 'CREDITCARD' | 'DEBITCARD' | 'MONEY';

  @ApiProperty()
  total_price: number;

  @ApiProperty()
  amount: number;

  @ApiProperty()
  change: number;
}
