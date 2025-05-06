import { MikroORM } from '@mikro-orm/core';
import config from '@/mikro-orm.config';

let orm: MikroORM;

export async function initializeORM() {
  if (!orm) {
    orm = await MikroORM.init(config);
  }
  return orm;
}