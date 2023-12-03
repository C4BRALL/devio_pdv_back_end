/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma/prisma.service';
import { CreateOrderRepository } from './protocols/create-order-repository';

@Injectable()
export class OrdersRepository implements CreateOrderRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    params: CreateOrderRepository.Params,
  ): Promise<CreateOrderRepository.Result> {
    try {
      const orders = params.map(async (order) => {
        const additionalConnect = order.additional.map((id: string) => {
          return { id };
        });

        const createdOrder = await this.prisma.order.create({
          data: {
            description: order.description,
            product_id: order.product_id,
            status: order.status,
            quantity: order.quantity,
            additional_selected: {
              connect: additionalConnect,
            },
          },
          select: { id: true },
        });
        return createdOrder;
      });
      const ordersId = await Promise.all(orders);
      const customerOrders = await this.prisma.payment.create({
        data: {
          customer: params[0].customer,
          payment_method: params[0].payment_method,
          total_price: params[0].total_price,
          amount: params[0].amount,
          change: params[0].change,
          orders: { connect: ordersId },
        },
        select: { id: true },
      });
      return [customerOrders];
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error,
        },
      );
    }
  }
}
