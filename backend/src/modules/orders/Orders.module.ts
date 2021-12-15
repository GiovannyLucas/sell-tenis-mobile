import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsRepository } from '../products/infra/typeorm/repositories/ProductsRepository';
import { OrdersController } from './infra/http/controllers/Orders.controller';
import { Order } from './infra/typeorm/entities/Order';
import { OrdersRepository } from './infra/typeorm/repositories/OrdersRepository';
import { CreateOrderUseCase } from './useCases/createOrder/CreateOrder.useCase';

@Module({
  imports: [TypeOrmModule.forFeature([Order])],
  controllers: [OrdersController],
  providers: [
    CreateOrderUseCase,
    {
      provide: 'ORDERS_REPOSITORY',
      inject: [OrdersRepository],
      useClass: OrdersRepository,
    },
    {
      provide: 'PRODUCTS_REPOSITORY',
      inject: [ProductsRepository],
      useClass: ProductsRepository,
    },
  ],
})
export class OrdersModule {}
