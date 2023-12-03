/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { ListProductsRepository } from './repositories/protocols/list-products-repository';
import { ListCategoriesRepository } from './repositories/protocols/list-categories.reposirory';
import { ListProductsByCategoryRepository } from './repositories/protocols/products-by-category-repository';
import { ListAdditionalByProductRepository } from './repositories/protocols/list-additional-by-product-repository';
import { CreateOrderRepository } from './repositories/protocols/create-order-repository';

@Injectable()
export class PdvService {
  constructor(
    private readonly listProductsRepository: ListProductsRepository,
    private readonly listCategoriesRepository: ListCategoriesRepository,
    private readonly listProductsByCategoryRepository: ListProductsByCategoryRepository,
    private readonly listAdditionalByProductRepository: ListAdditionalByProductRepository,
    private readonly createOrderRepository: CreateOrderRepository,
  ) {}

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

  async purchase(
    params: CreateOrderRepository.Params,
  ): Promise<CreateOrderRepository.Result> {
    try {
      return this.createOrderRepository.create(params);
    } catch (error) {
      return error;
    }
  }
}
