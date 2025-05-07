import { trpcServer } from "@/trpc/server";
import { redirect } from "next/navigation";
import React from "react";
import LogoutButton from "./components/logout-button";

export default async function DashboardPage() {
	const res = await trpcServer.getUser();

	if (!res.user) {
		redirect("/login");
	}

	return (
		<div className="flex flex-col gap-4 items-center justify-center mt-20">
			<h1 className="text-3xl font-bold">Authenticated Dashboard</h1>
			<p>
				Hello <b>{res.user.email}</b> you are logged in.
			</p>
			<LogoutButton />
		</div>
	);
}
