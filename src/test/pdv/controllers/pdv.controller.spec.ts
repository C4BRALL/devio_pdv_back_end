import { Test, TestingModule } from '@nestjs/testing';
import { ListProductsRepository } from '../../../pdv/repositories/protocols/list-products-repository';
import { ListCategoriesRepository } from '../../../pdv/repositories/protocols/list-categories.reposirory';
import { ListProductsByCategoryRepository } from '../../../pdv/repositories/protocols/products-by-category-repository';
import { ListAdditionalByProductRepository } from '../../../pdv/repositories/protocols/list-additional-by-product-repository';
import { CreateOrderRepository } from '../../../pdv/repositories/protocols/create-order-repository';
import { ListOrdersRepository } from '../../../pdv/repositories/protocols/list-orders-repository';
import { UpdateOrderStatusRepository } from '../../../pdv/repositories/protocols/update-order-status-repository';
import { PdvService } from '../../../pdv/pdv.service';
import { PdvController } from '../../../pdv/controllers/pdv.controller';

describe('PdvController', () => {
  let controller: PdvController;
  let service: PdvService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PdvController],
      providers: [
        PdvService,
        { provide: ListProductsRepository, useValue: {} },
        { provide: ListCategoriesRepository, useValue: {} },
        { provide: ListProductsByCategoryRepository, useValue: {} },
        { provide: ListAdditionalByProductRepository, useValue: {} },
        { provide: CreateOrderRepository, useValue: {} },
        { provide: ListOrdersRepository, useValue: {} },
        { provide: UpdateOrderStatusRepository, useValue: {} },
      ],
    }).compile();

    controller = module.get<PdvController>(PdvController);
    service = module.get<PdvService>(PdvService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should list products', async () => {
    const result: ListProductsRepository.Result = [
      {
        id: 'string',
        name: 'string',
        image: 'string',
        price: 0,
        currency: 'string',
        description: 'string',
        category_id: 'string',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    jest.spyOn(service, 'listProducts').mockImplementation(async () => result);

    expect(await controller.allProducts()).toBe(result);
  });
});
