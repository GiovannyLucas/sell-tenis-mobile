import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IProductsRepository } from 'src/modules/products/repositories/IProductsRepository';
import { CreateOrderDTO } from '../../dtos/CreateOrderDTO';
import { IOrdersRepository } from '../../repositories/IOrdersRepository';

@Injectable()
export class CreateOrderUseCase {
  constructor(
    @Inject('ORDERS_REPOSITORY')
    private ordersRepository: IOrdersRepository,
    @Inject('PRODUCTS_REPOSITORY')
    private productsRepository: IProductsRepository,
  ) {}

  async execute({ product_id }: CreateOrderDTO) {
    const productExists = await this.productsRepository.show(product_id);

    if (!productExists) {
      throw new NotFoundException('This product doesn`t exist.');
    }

    const order = await this.ordersRepository.create({ product_id });

    return order;
  }
}
