/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { ListProductsRepository } from './repositories/protocols/list-products-repository';
import { ListCategoriesRepository } from './repositories/protocols/list-categories.reposirory';
import { ListProductsByCategoryRepository } from './repositories/protocols/products-by-category-repository';
import { ListAdditionalByProductRepository } from './repositories/protocols/list-additional-by-product-repository';
import { CreateOrderRepository } from './repositories/protocols/create-order-repository';
import { ListOrdersRepository } from './repositories/protocols/list-orders-repository';

@Injectable()
export class PdvService {
  constructor(
    private readonly listProductsRepository: ListProductsRepository,
    private readonly listCategoriesRepository: ListCategoriesRepository,
    private readonly listProductsByCategoryRepository: ListProductsByCategoryRepository,
    private readonly listAdditionalByProductRepository: ListAdditionalByProductRepository,
    private readonly createOrderRepository: CreateOrderRepository,
    private readonly listOrdersRepository: ListOrdersRepository,
  ) {}

  listProducts(
    params: ListProductsRepository.Params,
  ): Promise<ListProductsRepository.Result> {
    return this.listProductsRepository.findAll(params);
  }

  listCategories(
    params: ListCategoriesRepository.Params,
  ): Promise<ListCategoriesRepository.Result> {
    return this.listCategoriesRepository.findAll(params);
  }

  productsByCategory(params: ListProductsByCategoryRepository.Params) {
    return this.listProductsByCategoryRepository.findByCategory(params);
  }

  async additional(params: ListAdditionalByProductRepository.Params) {
    return this.listAdditionalByProductRepository.findAdditional(params);
  }

  async purchase(
    params: CreateOrderRepository.Params,
  ): Promise<CreateOrderRepository.Result> {
    return this.createOrderRepository.create(params);
  }

  async getOrders(
    params: ListOrdersRepository.Params,
  ): Promise<ListOrdersRepository.Result> {
    return this.listOrdersRepository.findAll(params);
  }
}
