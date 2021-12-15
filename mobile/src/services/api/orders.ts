import api from '.';

export interface Order {
  id: string;
  product_id: string;
  created_at: Date;
  updated_at?: Date;
  version: number;
}

export const createOrder = (product_id: string) => {
  return new Promise<Order>((resolve, reject) => {
    api
      .post<Order>('/orders', { product_id })
      .then(response => {
        console.log(response.data);

        resolve(response.data);
      })
      .catch(reject);
  });
};
