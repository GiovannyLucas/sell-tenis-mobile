import api from '.';

export interface FilterProducts {
  name?: string;
  description?: string;
  brand?: string;
  category?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  amount: number;
  categories: string[];
  brand: string;
  size: number;
  quantity_in_stock: number;
  url_image: string;
  created_at: Date;
  updated_at?: Date;
  version: number;
}

export const getProducts = (filters?: FilterProducts) => {
  interface Response {
    products: Product[];
    categories: string[];
    brands: string[];
    total: number;
  }

  return new Promise<Response>((resolve, reject) => {
    api
      .get<Response>('/products', { params: filters })
      .then(response => {
        resolve(response.data);
      })
      .catch(reject);
  });
};
