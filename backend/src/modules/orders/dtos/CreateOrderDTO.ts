import { IsUUID } from 'class-validator';

export class CreateOrderDTO {
  @IsUUID()
  product_id: string;
}
