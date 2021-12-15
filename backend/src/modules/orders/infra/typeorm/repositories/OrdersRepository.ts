import { EntityManager, EntityRepository, Repository } from 'typeorm';
import { CreateOrderDTO } from '../../../dtos/CreateOrderDTO';
import { IOrdersRepository } from '../../../repositories/IOrdersRepository';
import { Order } from '../entities/Order';

@EntityRepository(Order)
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
