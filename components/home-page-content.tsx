"use client";

import { trpcClient } from "@/trpc/client";
import { useRouter } from "next/navigation";

export default function HomePageContent() {
	const router = useRouter();
	const { data, isLoading } = trpcClient.hello.useQuery({ text: "TRPC" });

	if (isLoading) return <div>Loading...</div>;

	return (
		<div className="flex flex-col items-center justify-center mt-20">
			<h2 className="text-2xl font-bold text-zinc-700">{data?.greeting}</h2>
			<h1 className="text-4xl font-bold max-w-xl text-center">
				NextJsApp Router Supabase Trpc Template
			</h1>
			<button
				type="button"
				className="bg-blue-500 text-white p-2 rounded-md font-bold px-4 mt-5 cursor-pointer"
				onClick={() => router.push("/login")}
			>
				Go to Login
			</button>
		</div>
	);
}
