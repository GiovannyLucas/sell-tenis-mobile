import { v4 as uuid } from 'uuid';
import { CreateOrderDTO } from '../../dtos/CreateOrderDTO';
import { Order } from '../../infra/typeorm/entities/Order';
import { IOrdersRepository } from '../IOrdersRepository';

export class OrdersRepositoryInMemory implements IOrdersRepository {
  private orders: Order[] = [];

  async create({ product_id }: CreateOrderDTO): Promise<Order> {
    const order = new Order();
    order.id = uuid();
    order.product_id = product_id;
    order.created_at = new Date();
    order.version = 0;

    this.orders.push(order);

    return order;
  }
}
