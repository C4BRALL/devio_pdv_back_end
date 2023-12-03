import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../config/prisma/prisma.service';
import { ListProductsRepository } from './protocols/list-products-repository';
import { ListProductsByCategoryRepository } from './protocols/products-by-category-repository';

@Injectable()
export class ProductsRepository
  implements ListProductsRepository, ListProductsByCategoryRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async findAll(
    params: ListProductsRepository.Params,
  ): Promise<ListProductsRepository.Result> {
    try {
      const products = await this.prisma.product.findMany({
        where: {
          name: {
            contains: params.search,
          },
        },
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
        orderBy: { created_at: 'desc' },
        take: Number.isNaN(params.take) ? 10 : params.take,
        skip: Number.isNaN(params.skip) ? 0 : params.skip,
      });
      return products;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findByCategory(
    params: ListProductsByCategoryRepository.Params,
  ): Promise<ListProductsByCategoryRepository.Result> {
    try {
      const products = await this.prisma.product.findMany({
        where: {
          category_id: params.id,
        },
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
        orderBy: { created_at: 'desc' },
        take: Number.isNaN(params.take) ? 10 : params.take,
        skip: Number.isNaN(params.skip) ? 0 : params.skip,
      });
      return products;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
