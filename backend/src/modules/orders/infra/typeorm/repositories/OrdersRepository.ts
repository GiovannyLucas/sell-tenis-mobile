import { CreateOrderDTO } from 'src/modules/orders/dtos/CreateOrderDTO';
import { IOrdersRepository } from 'src/modules/orders/repositories/IOrdersRepository';
import { EntityManager, Repository } from 'typeorm';
import { Order } from '../entities/Order';

export class OrdersRepository implements IOrdersRepository {
  private repository: Repository<Order>;

  constructor(manager: EntityManager) {
    this.repository = manager.getRepository(Order);
  }

  async create(orderToCreate: CreateOrderDTO): Promise<Order> {
    const order = this.repository.create(orderToCreate);

    await this.repository.save(order);

    return order;
  }
}
