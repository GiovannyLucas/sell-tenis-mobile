import { EntityManager, EntityRepository, Repository } from 'typeorm';
import { FilterProductsDTO } from '../../../dtos/FilterProductsDTO';
import { IProductsRepository } from '../../../repositories/IProductsRepository';
import { Product } from '../entities/Product';

@EntityRepository(Product)
export class ProductsRepository implements IProductsRepository {
  private repository: Repository<Product>;

  constructor(manager: EntityManager) {
    this.repository = manager.getRepository(Product);
  }

  async find(
    filters?: FilterProductsDTO,
  ): Promise<{
    products: Product[];
    total: number;
    categories: string[];
    brands: string[];
  }> {
    const name: string = filters?.name || '';
    const description: string = filters?.description || '';
    const brand: string = filters?.brand || '';
    const category: string = filters?.category || '';

    const nameCaseWhere = `CASE
      WHEN (:name = '%%') THEN TRUE
      ELSE name ILIKE :name
    END`;

    const descriptionCaseWhere = `CASE
      WHEN (:description = '%%') THEN TRUE
      ELSE description ILIKE :description
    END`;

    const brandCaseWhere = `CASE
      WHEN (:brand = '') THEN TRUE
      ELSE brand = :brand
    END`;

    const categoryCaseWhere = `CASE
      WHEN (:category = '') THEN TRUE
      ELSE :category = ANY(categories)
    END`;

    const [products, total] = await this.repository
      .createQueryBuilder()
      .where(nameCaseWhere, { name: `%${name}%` })
      .andWhere(descriptionCaseWhere, { description: `%${description}%` })
      .andWhere(brandCaseWhere, { brand })
      .andWhere(categoryCaseWhere, { category })
      .orderBy({ name: 'ASC' })
      .getManyAndCount();

    const [{ categories }] = await this.repository.query(
      'SELECT array_agg(distinct category) categories FROM products, unnest(categories) category',
    );

    const [{ brands }] = await this.repository.query(
      'SELECT array_agg(DISTINCT brand) brands FROM products',
    );

    return { products, total, categories, brands };
  }

  async show(id: string): Promise<Product> {
    const product = await this.repository.findOne(id);

    return product;
  }
}
