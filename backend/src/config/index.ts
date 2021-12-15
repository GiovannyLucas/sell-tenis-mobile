import { app } from './app';
import { database } from '../shared/infra/typeorm';

export default () => ({
  database,
  app,
});
