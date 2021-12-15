import { Product } from '../../infra/typeorm/entities/Product';
import { IProductsRepository } from '../IProductsRepository';
import { v4 as uuid } from 'uuid';
import { FilterProductsDTO } from '../../dtos/FilterProductsDTO';

export class ProductsRepositoryInMemory implements IProductsRepository {
  private products: Product[] = [
    {
      id: 'e1e6dee0-dff6-4c5a-afb7-dacf49f60903',
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
      amount: 600,
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
      name: 'Air Max 600',
      description: 'Tenis Nike Pro Max 600',
      amount: 360,
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

    const productsByName = this.products.filter((product) =>
      product.name.includes(name),
    );

    const productsByDescription = productsByName.filter((product) =>
      product.description.includes(description),
    );

    const productsByCategory = category
      ? productsByDescription.filter((product) =>
          product.categories.includes(category),
        )
      : productsByDescription;

    const products = productsByCategory.filter((product) =>
      product.brand.includes(brand),
    );

    const categories = this.products
      .map((product) => product.categories)
      .flat();

    const brands = this.products.map((product) => product.brand).flat();

    return { products, total: products.length, categories, brands };
  }

  async show(id: string): Promise<Product> {
    const product = this.products.find((product) => product.id === id);

    return product;
  }
}
