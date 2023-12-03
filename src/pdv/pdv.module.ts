import { Module } from '@nestjs/common';
import { PdvService } from './pdv.service';
import { ListProductsRepository } from './repositories/protocols/list-products-repository';
import { ProductsRepository } from './repositories/Products-repository';
import { PdvController } from './controllers/pdv.controller';
import { ListCategoriesRepository } from './repositories/protocols/list-categories.reposirory';
import { CategoriesRepository } from './repositories/categories-repository';
import { ListProductsByCategoryRepository } from './repositories/protocols/products-by-category-repository';
import { ListAdditionalByProductRepository } from './repositories/protocols/list-additional-by-product-repository';
import { CreateOrderRepository } from './repositories/protocols/create-order-repository';
import { OrdersRepository } from './repositories/orders-repository';

@Module({
  controllers: [PdvController],
  providers: [
    PdvService,
    {
      provide: ListProductsRepository,
      useClass: ProductsRepository,
    },
    {
      provide: ListProductsByCategoryRepository,
      useClass: ProductsRepository,
    },
    {
      provide: ListAdditionalByProductRepository,
      useClass: ProductsRepository,
    },
    {
      provide: ListCategoriesRepository,
      useClass: CategoriesRepository,
    },
    {
      provide: CreateOrderRepository,
      useClass: OrdersRepository,
    },
  ],
})
export class PdvModule {}
