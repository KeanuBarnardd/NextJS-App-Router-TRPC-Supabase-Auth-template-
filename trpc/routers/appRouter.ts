import { z } from "zod";
import { procedure, createTRPCRouter } from "../init";

export const appRouter = createTRPCRouter({
	hello: procedure
		.input(
			z
				.object({
					text: z.string(),
				})
				.optional(),
		)
		.query((opts) => {
			return {
				greeting: `Hello from ${opts.input?.text} 😍 `,
			};
		}),
	login: procedure
		.input(
			z.object({
				email: z.string(),
				password: z.string(),
			}),
		)
		.mutation(async ({ ctx, input }) => {
			const { data, error } = await ctx.supabase.auth.signInWithPassword(input);
			if (error) {
				throw new Error(error.message);
			}

			return data;
		}),
	signUp: procedure
		.input(
			z.object({
				email: z.string().email(),
				password: z.string().min(6),
			}),
		)
		.mutation(async ({ ctx, input }) => {
			const { data, error } = await ctx.supabase.auth.signUp({
				email: input.email,
				password: input.password,
			});
			if (error) {
				throw new Error(error.message);
			}

			return data;
		}),
	getUser: procedure.query(async ({ ctx }) => {
		try {
			const { data, error } = await ctx.supabase.auth.getUser();
			if (error) {
				throw new Error(error.message);
			}
			return data;
		} catch (error) {
			console.error("Get user error:", error);
			throw error;
		}
	}),
	logout: procedure.mutation(async ({ ctx }) => {
		try {
			const { error } = await ctx.supabase.auth.signOut();
			if (error) {
				throw new Error(error.message);
			}
		} catch (error) {
			console.error("Logout error:", error);
			throw error;
		}
	}),
});

export type AppRouter = typeof appRouter;
