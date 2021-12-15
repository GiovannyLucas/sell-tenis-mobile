import { FilterProductsDTO } from '../../dtos/FilterProductsDTO';
import { ProductsRepositoryInMemory } from '../../repositories/in-memory/ProductsRepositoryInMemory';
import { FindProductsUseCase } from './FindProducts.useCase';

describe('Find Products Use Case', () => {
  let productsRepositoryInMemory: ProductsRepositoryInMemory;
  let findProductsUseCase: FindProductsUseCase;

  beforeEach(() => {
    productsRepositoryInMemory = new ProductsRepositoryInMemory();
    findProductsUseCase = new FindProductsUseCase(productsRepositoryInMemory);
  });

  it('should be able to get the products without filters', async () => {
    const products = await findProductsUseCase.execute();

    expect(products.total).toBe(3);
  });

  it('should be able to get the products with some filters', async () => {
    const filters: FilterProductsDTO = {
      name: '500',
      category: 'tenis',
    };

    const products = await findProductsUseCase.execute(filters);

    expect(products.total).toBe(1);
  });
});
