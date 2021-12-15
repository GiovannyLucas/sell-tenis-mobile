import { Controller, Get, Param, Query } from '@nestjs/common';
import { ShowProductUseCase } from 'src/modules/products/useCases/showProduct/ShowProduct.useCase';
import { FilterProductsDTO } from '../../../dtos/FilterProductsDTO';
import { FindProductsUseCase } from '../../../useCases/findProducts/FindProducts.useCase';

@Controller('products')
export class ProductsController {
  constructor(
    private findProductsUseCase: FindProductsUseCase,
    private showProductUseCase: ShowProductUseCase,
  ) {}

  @Get()
  async find(@Query() filters: FilterProductsDTO) {
    const products = await this.findProductsUseCase.execute(filters);

    return products;
  }

  @Get(':id')
  async show(@Param('id') id: string) {
    const product = await this.showProductUseCase.execute(id);

    return product;
  }
}
