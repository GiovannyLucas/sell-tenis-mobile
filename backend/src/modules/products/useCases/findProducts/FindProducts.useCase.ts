import { Inject, Injectable } from '@nestjs/common';
import { FilterProductsDTO } from '../../dtos/FilterProductsDTO';
import { IProductsRepository } from '../../repositories/IProductsRepository';

@Injectable()
export class FindProductsUseCase {
  constructor(
    @Inject('PRODUCTS_REPOSITORY')
    private productsRepository: IProductsRepository,
  ) {}

  async execute(filter?: FilterProductsDTO) {
    const products = await this.productsRepository.find(filter);

    return products;
  }
}
