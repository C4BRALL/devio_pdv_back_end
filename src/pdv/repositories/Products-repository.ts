import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../config/prisma/prisma.service';
import { ListProductsRepository } from './protocols/list-products-repository';

@Injectable()
export class ProductsRepository implements ListProductsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(
    params: ListProductsRepository.Params,
  ): Promise<ListProductsRepository.Result> {
    try {
      const products = await this.prisma.product.findMany({
        select: {
          id: true,
          name: true,
          image: true,
          description: true,
          price: true,
          currency: true,
          created_at: true,
          updated_at: true,
          category_id: true,
        },
        take: params.take ? params.take : 10,
        skip: params.skip ? params.take : 0,
      });
      return products;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
