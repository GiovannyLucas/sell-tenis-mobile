import { Product } from '../../infra/typeorm/entities/Product';
import { IProductsRepository } from '../IProductsRepository';

export class ProductsRepositoryInMemory implements IProductsRepository {
  private products: Product[] = [];

  find(): Promise<Product[]> {
    throw new Error('Method not implemented.');
  }

  findDistinctCategoriesAndBrands(): Promise<{
    categories: string[];
    brands: string[];
  }> {
    throw new Error('Method not implemented.');
  }

  show(id: string): Promise<Product> {
    throw new Error('Method not implemented.');
  }
}
