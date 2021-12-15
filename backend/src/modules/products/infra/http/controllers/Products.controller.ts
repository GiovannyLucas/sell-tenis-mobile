import { Controller, Get, Query } from '@nestjs/common';
import { FilterProductsDTO } from '../../../dtos/FilterProductsDTO';
import { FindProductsUseCase } from '../../../useCases/findProductsUseCase/FindProducts.useCase';

@Controller('products')
export class ProductsController {
  constructor(private findProductsUseCase: FindProductsUseCase) {}

  @Get()
  async find(@Query() filters: FilterProductsDTO) {
    const products = await this.findProductsUseCase.execute(filters);

    return products;
  }
}
