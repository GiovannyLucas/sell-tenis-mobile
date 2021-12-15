import { Product } from '../../infra/typeorm/entities/Product';
import { IProductsRepository } from '../IProductsRepository';
import { v4 as uuid } from 'uuid';
import { FilterProductsDTO } from '../../dtos/FilterProductsDTO';

export class ProductsRepositoryInMemory implements IProductsRepository {
  private products: Product[] = [
    {
      id: uuid(),
      name: 'Air Max',
      description: 'Tenis Nike Air Max',
      amount: 500,
      categories: ['tenis', 'pisante', 'esportes'],
      brand: 'Nike',
      size: 40,
      quantity_in_stock: 10,
      url_image:
        'https://raw.githubusercontent.com/Josimar16/teste-fullstack-mobile/main/images/1%20–%201.png',
      created_at: new Date(),
      updated_at: null,
      version: 0,
    },
    {
      id: uuid(),
      name: 'Air Max 500',
      description: 'Tenis Nike Air Max 500',
      amount: 500,
      categories: ['tenis', 'pisante', '500', 'esportes'],
      brand: 'Nike',
      size: 39,
      quantity_in_stock: 50,
      url_image:
        'https://raw.githubusercontent.com/Josimar16/teste-fullstack-mobile/main/images/1%20–%202.png',
      created_at: new Date(),
      updated_at: null,
      version: 0,
    },
    {
      id: uuid(),
      name: 'Air Max 500',
      description: 'Tenis Nike Pro Max 500',
      amount: 500,
      categories: ['tenis', 'sapatenis', 'corrida'],
      brand: 'Adidas',
      size: 35,
      quantity_in_stock: 63,
      url_image:
        'https://http2.mlstatic.com/D_NQ_NP_916269-MLB46839740034_072021-W.jpg',
      created_at: new Date(),
      updated_at: null,
      version: 0,
    },
  ];

  async find(
    filters?: FilterProductsDTO,
  ): Promise<{ products: Product[]; total: number }> {
    const name: string | null = filters?.name || null;
    const description: string | null = filters?.description || null;
    const brand: string | null = filters?.brand || null;
    const category: string | null = filters?.category || null;

    const productsByName = this.products.filter((product) =>
      product.name.includes(name),
    );

    const productsByDescription = productsByName.filter((product) =>
      product.description.includes(description),
    );

    const products = productsByDescription.filter(
      (product) =>
        product.brand === brand || product.categories.includes(category),
    );

    return { products, total: products.length };
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
