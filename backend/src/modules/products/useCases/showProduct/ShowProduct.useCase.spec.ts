import { NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { ProductsRepositoryInMemory } from '../../repositories/in-memory/ProductsRepositoryInMemory';
import { ShowProductUseCase } from './ShowProduct.useCase';

describe('Show Product Use Case', () => {
  let productsRepositoryInMemory: ProductsRepositoryInMemory;
  let showProductUseCase: ShowProductUseCase;

  beforeEach(() => {
    productsRepositoryInMemory = new ProductsRepositoryInMemory();
    showProductUseCase = new ShowProductUseCase(productsRepositoryInMemory);
  });

  it('should be able to get a product by Id', async () => {
    const VALID_ID = 'e1e6dee0-dff6-4c5a-afb7-dacf49f60903';

    const product = await showProductUseCase.execute(VALID_ID);

    expect(product.id).toBe(VALID_ID);
  });

  it('should not be able to get a product if it doesnt exist', async () => {
    const RANDOM_UUID = uuid();

    const productFunction = showProductUseCase.execute(RANDOM_UUID);

    await expect(productFunction).rejects.toEqual(
      new NotFoundException('Product not found.'),
    );
  });
});
