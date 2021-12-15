import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'character varying' })
  name: string;

  @Column({ type: 'character varying' })
  description: string;

  @Column({ type: 'decimal' })
  amount: number;

  @Column({ type: 'character varying', array: true })
  categories: string[];

  @Column({ type: 'character varying' })
  brand: string;

  @Column({ type: 'decimal' })
  size: number;

  @Column({ type: 'integer' })
  quantity_in_stock: number;

  @Column({ type: 'character varying' })
  url_image: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at?: Date;

  @VersionColumn()
  version: number;
}
