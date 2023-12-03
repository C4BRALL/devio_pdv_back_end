import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../config/prisma/prisma.service';
import { ProductsRepository } from '../../../pdv/repositories/Products-repository';

describe('ProductsRepository', () => {
  let productsRepository: ProductsRepository;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsRepository, PrismaService],
    }).compile();

    productsRepository = module.get<ProductsRepository>(ProductsRepository);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(productsRepository).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of products', async () => {
      const result = [
        {
          id: '1',
          name: '1',
          image: 'true',
          description: 'true',
          price: 1,
          currency: 'true',
          category_id: 'some_category_id',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: '2',
          name: '2',
          image: 'true',
          description: 'true',
          price: 2,
          currency: 'true',
          category_id: 'some_category_id',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ];
      jest.spyOn(prismaService.product, 'findMany').mockResolvedValue(result);

      expect(await productsRepository.findAll({ skip: 0, take: 2 })).toBe(
        result,
      );
    });
  });
});
