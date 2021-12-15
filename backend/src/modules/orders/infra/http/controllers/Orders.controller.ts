import { Body, Controller, Post } from '@nestjs/common';
import { CreateOrderUseCase } from 'src/modules/orders/useCases/createOrder/CreateOrder.useCase';
import { CreateOrderDTO } from '../../../dtos/CreateOrderDTO';

@Controller('orders')
export class OrdersController {
  constructor(private createOrderUseCase: CreateOrderUseCase) {}

  @Post()
  async create(@Body() orderToCreate: CreateOrderDTO) {
    const order = await this.createOrderUseCase.execute(orderToCreate);

    return order;
  }
}
