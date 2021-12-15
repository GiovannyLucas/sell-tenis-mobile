import { NotFoundException } from '@nestjs/common';
import { ProductsRepositoryInMemory } from '../../../products/repositories/in-memory/ProductsRepositoryInMemory';
import { v4 as uuid } from 'uuid';
import { OrdersRepositoryInMemory } from '../../repositories/in-memory/OrdersRepositoryInMemory';
import { CreateOrderUseCase } from './CreateOrder.useCase';

describe('Create Order Use Case', () => {
  let productsRepositoryInMemory: ProductsRepositoryInMemory;
  let ordersRepositoryInMemory: OrdersRepositoryInMemory;
  let createOrderUseCase: CreateOrderUseCase;

  beforeEach(() => {
    productsRepositoryInMemory = new ProductsRepositoryInMemory();
    ordersRepositoryInMemory = new OrdersRepositoryInMemory();
    createOrderUseCase = new CreateOrderUseCase(
      ordersRepositoryInMemory,
      productsRepositoryInMemory,
    );
  });

  it('should be able to create a new order', async () => {
    const VALID_PRODUCT_ID = 'e1e6dee0-dff6-4c5a-afb7-dacf49f60903';

    const order = await createOrderUseCase.execute({
      product_id: VALID_PRODUCT_ID,
    });

    expect(order.product_id).toBe(VALID_PRODUCT_ID);
    expect(order.id).not.toBeFalsy();
  });

  it('should be not able to create a new order if the product doesnt exist', async () => {
    const RANDOM_UUID = uuid();

    const createOrderFunction = createOrderUseCase.execute({
      product_id: RANDOM_UUID,
    });

    await expect(createOrderFunction).rejects.toEqual(
      new NotFoundException('This product doesn`t exist.'),
    );
  });
});
