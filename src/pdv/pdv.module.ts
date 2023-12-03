import { Module } from '@nestjs/common';
import { PdvService } from './pdv.service';
import { ListProductsRepository } from './repositories/protocols/list-products-repository';
import { ProductsRepository } from './repositories/Products-repository';
import { PdvController } from './controllers/pdv.controller';

@Module({
  controllers: [PdvController],
  providers: [
    PdvService,
    {
      provide: ListProductsRepository,
      useClass: ProductsRepository,
    },
  ],
})
export class PdvModule {}
