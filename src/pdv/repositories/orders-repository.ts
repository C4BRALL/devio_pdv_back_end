/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma/prisma.service';
import { UpdateOrderStatusUsecase } from 'src/core/usecases/pdv/update-order-status';
import { CreateOrderRepository } from './protocols/create-order-repository';
import { ListOrdersRepository } from './protocols/list-orders-repository';
import { UpdateOrderStatusRepository } from './protocols/update-order-status-repository';

@Injectable()
export class OrdersRepository
  implements
    CreateOrderRepository,
    ListOrdersRepository,
    UpdateOrderStatusRepository
{
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
          error,
          status: HttpStatus.INTERNAL_SERVER_ERROR,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
        { description: error },
      );
    }
  }

  async findAll(
    params?: ListOrdersRepository.Params,
  ): Promise<ListOrdersRepository.Result> {
    try {
      const orders = await this.prisma.order.findMany({
        where: { status: params.status },
        select: {
          id: true,
          description: true,
          status: true,
          product_id: true,
          quantity: true,
          additional_selected: true,
          paymentId: true,
          created_at: true,
          updated_at: true,
        },
        orderBy: {
          created_at: 'asc',
        },
      });
      return orders;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error?.message,
        },
      );
    }
  }

  async updateStatus(
    params: UpdateOrderStatusUsecase.Params,
  ): Promise<UpdateOrderStatusUsecase.Result> {
    try {
      const orderUpdated = await this.prisma.order.update({
        where: {
          id: params.id,
        },
        data: {
          status: params.newStatus,
        },
        select: {
          id: true,
          status: true,
          product: {
            select: {
              name: true,
            },
          },
        },
      });
      return orderUpdated;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error?.message,
        },
      );
    }
  }
}
