import { z } from 'zod';
import { baseProcedure, createTRPCRouter } from '../init';
import { initializeORM } from '@/utils/mikro-orm';
import { Todo } from '@/db/entities/Todo';

export const appRouter = createTRPCRouter({
  hello: baseProcedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query(async (opts) => {
      const orm = await initializeORM();
      const em = orm.em.fork();

      const todo = em.create(Todo, {
        id: 1,
        title: 'Chicken',
        completed: false,
        updatedAt: new Date(),
        createdAt: '',
      });

      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;