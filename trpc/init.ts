import { createClient } from "@/supabase/server";
import { initTRPC } from "@trpc/server";
import { cache } from "react";

export const createTRPCContext = cache(async () => {
	const supabase = await createClient();

	/**
	 * @see: https://trpc.io/docs/server/context
	 */
	return { supabase };
});

// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
const t = initTRPC.context<TRPCContext>().create({
	/**
	 * @see https://trpc.io/docs/server/data-transformers
	 */
	// transformer: superjson,
});
// Base router and procedure helpers
export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const procedure = t.procedure;
export type TRPCContext = Awaited<ReturnType<typeof createTRPCContext>>;
