import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './infra/http/controllers/Products.controller';
import { Product } from './infra/typeorm/entities/Product';
import { ProductsRepository } from './infra/typeorm/repositories/ProductsRepository';
import { FindProductsUseCase } from './useCases/findProductsUseCase/FindProducts.useCase';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductsController],
  providers: [
    FindProductsUseCase,
    {
      provide: 'PRODUCTS_REPOSITORY',
      inject: [ProductsRepository],
      useClass: ProductsRepository,
    },
  ],
})
export class ProductsModule {}
