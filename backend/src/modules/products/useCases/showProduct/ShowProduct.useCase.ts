import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IProductsRepository } from '../../repositories/IProductsRepository';

@Injectable()
export class ShowProductUseCase {
  constructor(
    @Inject('PRODUCTS_REPOSITORY')
    private productsRepository: IProductsRepository,
  ) {}

  async execute(id: string) {
    const product = await this.productsRepository.show(id);

    if (!product) {
      throw new NotFoundException('Product not found.');
    }

    return product;
  }
}
