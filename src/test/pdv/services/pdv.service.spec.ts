import { Test, TestingModule } from '@nestjs/testing';
import { ListCategoriesRepository } from '../../../pdv/repositories/protocols/list-categories.reposirory';
import { ListProductsByCategoryRepository } from '../../../pdv/repositories/protocols/products-by-category-repository';
import { ListAdditionalByProductRepository } from '../../../pdv/repositories/protocols/list-additional-by-product-repository';
import { CreateOrderRepository } from '../../../pdv/repositories/protocols/create-order-repository';
import { ListOrdersRepository } from '../../../pdv/repositories/protocols/list-orders-repository';
import { UpdateOrderStatusRepository } from '../../../pdv/repositories/protocols/update-order-status-repository';
import { ListProductsRepository } from '../../../pdv/repositories/protocols/list-products-repository';
import { PdvService } from '../../../pdv/pdv.service';
// Importe os outros repositórios necessários

describe('PdvService', () => {
  let service: PdvService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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

    service = module.get<PdvService>(PdvService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Aqui você pode adicionar seus testes
  // Por exemplo, para testar o método listProducts:
  it('should list products', async () => {
    const result = []; // Substitua isso pelo valor esperado
    jest.spyOn(service, 'listProducts').mockImplementation(async () => result);

    expect(await service.listProducts({})).toBe(result);
  });

  // Adicione testes semelhantes para os outros métodos
});
