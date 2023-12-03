import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma/prisma.service';
import { ListCategoriesRepository } from './protocols/list-categories.reposirory';

@Injectable()
export class CategoriesRepository implements ListCategoriesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(
    params: ListCategoriesRepository.Params,
  ): Promise<ListCategoriesRepository.Result> {
    try {
      const categories = await this.prisma.category.findMany({
        select: {
          id: true,
          name: true,
          image: true,
          description: true,
          created_at: true,
          updated_at: true,
        },
        orderBy: { created_at: 'desc' },
        take: Number.isNaN(params.take) ? 10 : params.take,
        skip: Number.isNaN(params.skip) ? 0 : params.skip,
      });
      return categories;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
