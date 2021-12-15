import { FilterProductsDTO } from '../dtos/FilterProductsDTO';
import { Product } from '../infra/typeorm/entities/Product';

export interface IProductsRepository {
  find(
    filters?: FilterProductsDTO,
  ): Promise<{ products: Product[]; total: number }>;
  show(id: string): Promise<Product | undefined>;
}
