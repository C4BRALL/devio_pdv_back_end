/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreatePdvDto } from './dto/create-pdv.dto';
import { UpdatePdvDto } from './dto/update-pdv.dto';
import { ListProductsRepository } from './repositories/protocols/list-products-repository';
import { ListCategoriesRepository } from './repositories/protocols/list-categories.reposirory';
import { ListProductsByCategoryRepository } from './repositories/protocols/products-by-category-repository';
import { ListAdditionalByProductRepository } from './repositories/protocols/list-additional-by-product-repository';

@Injectable()
export class PdvService {
  constructor(
    private readonly listProductsRepository: ListProductsRepository,
    private readonly listCategoriesRepository: ListCategoriesRepository,
    private readonly listProductsByCategoryRepository: ListProductsByCategoryRepository,
    private readonly listAdditionalByProductRepository: ListAdditionalByProductRepository,
  ) {}

  create(createPdvDto: CreatePdvDto) {
    return 'This action adds a new api';
  }

  listProducts(
    params: ListProductsRepository.Params,
  ): Promise<ListProductsRepository.Result> {
    try {
      return this.listProductsRepository.findAll(params);
    } catch (error) {
      return error;
    }
  }

  listCategories(
    params: ListCategoriesRepository.Params,
  ): Promise<ListCategoriesRepository.Result> {
    try {
      return this.listCategoriesRepository.findAll(params);
    } catch (error) {
      return error;
    }
  }

  productsByCategory(params: ListProductsByCategoryRepository.Params) {
    try {
      return this.listProductsByCategoryRepository.findByCategory(params);
    } catch (error) {
      return error;
    }
  }

  async additional(params: ListAdditionalByProductRepository.Params) {
    try {
      return this.listAdditionalByProductRepository.findAdditional(params);
    } catch (error) {
      return error;
    }
  }
}
