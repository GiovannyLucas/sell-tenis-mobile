import { CreateOrderDTO } from '../dtos/CreateOrderDTO';
import { Order } from '../infra/typeorm/entities/Order';

export interface IOrdersRepository {
  create(orderToCreate: CreateOrderDTO): Promise<Order>;
}
