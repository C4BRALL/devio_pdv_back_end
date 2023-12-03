import { Controller, Get, Post, Param, Query, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PdvService } from '../pdv.service';
import { FindAllProductsDto } from '../dto/find-all-products.dto';
import { FindAllCategoryDto } from '../dto/find-all-category.dto';
import { FindAllProductsByCategoryDto } from '../dto/find-all-products-by-category.dto';
import { FindAdditionalByProductsDto } from '../dto/additional-by-product.dto';
import { CreateOrderDto } from '../dto/create-order.dto';
import { ListAdditionalByProductRepository } from '../repositories/protocols/list-additional-by-product-repository';
import { ListProductsRepository } from '../repositories/protocols/list-products-repository';
import { ListCategoriesRepository } from '../repositories/protocols/list-categories.reposirory';
import { ListProductsByCategoryRepository } from '../repositories/protocols/products-by-category-repository';
import { CreateOrderRepository } from '../repositories/protocols/create-order-repository';

@Controller('api')
export class PdvController {
  constructor(private readonly pdvService: PdvService) {}

  @ApiTags('Products')
  @ApiResponse({
    status: 200,
    schema: {
      example: [
        {
          id: '72c8e9be-f333-46db-9899-0d7c0d92c82e',
          name: 'Suco de Laranja',
          image: 'data:image/png;base64,iVBORw0KGgo',
          description: '300ml',
          price: 7,
          currency: 'R$',
          created_at: '2023-12-01T22:22:36.952Z',
          updated_at: '2023-12-01T22:22:36.952Z',
          category_id: '155522c0-2e21-42a7-bdae-f9e1ae2e4a88',
        },
        {
          id: 'de1e489b-c9bc-4793-a6a2-bc67c1c12c03',
          name: 'Pudim',
          image: 'data:image/png;base64,/9j/4AAQSkZJRg',
          description:
            'Pudim de leite 150g serve 1 pessoa Não contem amido de milho e nem gelatina',
          price: 9,
          currency: 'R$',
          created_at: '2023-12-01T22:22:37.011Z',
          updated_at: '2023-12-01T22:26:07.149Z',
          category_id: '8b59c596-e8a3-4f5f-9764-5438f5bc94b7',
        },
      ],
    },
  })
  @Get('products')
  async allProducts(
    @Query('take') take?: string,
    @Query('skip') skip?: string,
    @Query('search') search?: string,
  ): Promise<ListProductsRepository.Result> {
    try {
      const findProducts = new FindAllProductsDto();
      findProducts.search = search;
      findProducts.take = +take;
      findProducts.skip = +skip;
      return this.pdvService.listProducts(findProducts);
    } catch (error) {
      return error;
    }
  }

  @ApiTags('Category')
  @ApiResponse({
    status: 200,
    schema: {
      example: [
        {
          id: '155522c0-2e21-42a7-bdae-f9e1ae2e4a88',
          name: 'Bebidas',
          image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAy',
          description: null,
          created_at: '2023-12-01T22:22:36.428Z',
          updated_at: '2023-12-01T22:22:36.428Z',
        },
        {
          id: '22fd6d57-baa3-4e4e-b147-859aadd9150c',
          name: 'Acompanhamentos',
          image: 'data:image/png;base64,/9j/4AAQSkZJRgABAQAAA',
          description: null,
          created_at: '2023-12-01T22:22:36.413Z',
          updated_at: '2023-12-01T22:22:36.413Z',
        },
      ],
    },
  })
  @Get('categories')
  async allCategories(
    @Query('take') take?: number,
    @Query('skip') skip?: number,
  ): Promise<ListCategoriesRepository.Result> {
    try {
      const findCategories = new FindAllCategoryDto();
      findCategories.take = +take;
      findCategories.skip = +skip;
      return this.pdvService.listCategories(findCategories);
    } catch (error) {
      return error;
    }
  }

  @ApiTags('Products')
  @ApiResponse({
    status: 200,
    schema: {
      example: [
        {
          id: '72c8e9be-f333-46db-9899-0d7c0d92c82e',
          name: 'Suco de Laranja',
          image: 'data:image/png;base64,iVBORw0KGgo',
          description: '300ml',
          price: 7,
          currency: 'R$',
          created_at: '2023-12-01T22:22:36.952Z',
          updated_at: '2023-12-01T22:22:36.952Z',
          category_id: '155522c0-2e21-42a7-bdae-f9e1ae2e4a88',
        },
        {
          id: '70ea7eb5-6b74-4bb2-9484-b160dab1e99b',
          name: 'Refrigerante lata Pepsi',
          image: 'data:image/png;base64,UklGRtbKAABXRUJ',
          description: '350ml',
          price: 5,
          currency: 'R$',
          created_at: '2023-12-01T22:22:36.739Z',
          updated_at: '2023-12-01T22:22:36.739Z',
          category_id: '155522c0-2e21-42a7-bdae-f9e1ae2e4a88',
        },
      ],
    },
  })
  @Get('products/:category_id')
  async allProductsByCategory(
    @Param('category_id') categoryId: string,
    @Query('take') take?: string,
    @Query('skip') skip?: string,
  ): Promise<ListProductsByCategoryRepository.Result> {
    try {
      const findProducts = new FindAllProductsByCategoryDto();
      findProducts.id = categoryId;
      findProducts.take = +take;
      findProducts.skip = +skip;
      return this.pdvService.productsByCategory(findProducts);
    } catch (error) {
      return error;
    }
  }

  @ApiTags('Products')
  @ApiResponse({
    status: 200,
    schema: {
      example: [
        {
          id: '48c6983b-0ff1-4fa0-9064-de74874b3580',
          name: 'Queijo cheddar',
          image: 'data:image/png;base64,iVBORw0KGgoAAAANSUh',
          description: '10g',
          price: 1.5,
          currency: 'R$',
          created_at: '2023-12-01T22:22:37.027Z',
          updated_at: '2023-12-01T22:22:37.027Z',
        },
        {
          id: '18cca62b-6cba-47a5-b3a3-57ed4ead6632',
          name: 'Molho barbecue',
          image: 'data:image/png;base64,iVBORw0KG',
          description: '',
          price: 0.5,
          currency: 'R$',
          created_at: '2023-12-01T22:22:37.043Z',
          updated_at: '2023-12-01T22:22:37.043Z',
        },
      ],
    },
  })
  @Get('products/additional/:product_id')
  async additional(
    @Param('product_id') productId: string,
  ): Promise<ListAdditionalByProductRepository.Result> {
    try {
      const findAdditional = new FindAdditionalByProductsDto();
      findAdditional.id = productId;
      return this.pdvService.additional(findAdditional);
    } catch (error) {
      return error;
    }
  }

  @ApiTags('Orders')
  @ApiOperation({ summary: 'Create order and payment' })
  @ApiResponse({
    status: 200,
    schema: {
      example: [
        {
          id: '18cca62b-6cba-47a5-b3a3-57ed4ead6632',
        },
      ],
    },
  })
  @Post('products/purchase')
  async purchase(
    @Body() createOrderDto: CreateOrderDto[],
  ): Promise<CreateOrderRepository.Result> {
    try {
      return this.pdvService.purchase(createOrderDto);
    } catch (error) {
      return error;
    }
  }
}
