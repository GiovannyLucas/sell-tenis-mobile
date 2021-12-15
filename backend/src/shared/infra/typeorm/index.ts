import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { resolve } from 'path';

export const database: TypeOrmModuleOptions = {
  type: 'postgres',
  port: Number(process.env.DB_PORT) || 5432,
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'giovanny',
  password: process.env.DB_PASS || 'dv1010aa',
  database: process.env.DB_NAME || 'certsys_test',
  entities: [
    resolve(
      __dirname,
      '..',
      '..',
      '..',
      'modules',
      '**',
      'infra',
      'typeorm',
      'entities',
      '*',
    ),
  ],
  migrations: [
    resolve(__dirname, '..', 'shared', 'infra', 'typeorm', 'migrations', '*'),
  ],
  cli: {
    migrationsDir: resolve(
      __dirname,
      '..',
      'shared',
      'infra',
      'typeorm',
      'migrations',
    ),
  },
  migrationsRun: true,
  synchronize: process.env.DB_SYNC === 'true' || true,
  logging: ['error', 'warn'],
};
