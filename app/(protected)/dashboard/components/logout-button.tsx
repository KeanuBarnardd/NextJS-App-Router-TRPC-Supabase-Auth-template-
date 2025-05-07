"use client";

import { trpcClient } from "@/trpc/client";
import React from "react";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
	const router = useRouter();
	const logout = trpcClient.logout.useMutation({
		onSuccess: () => {
			alert("Logout successful");
			router.push("/login");
		},
	});

	return (
		<button
			type="button"
			onClick={() => logout.mutate()}
			className="bg-red-500 text-white p-2 rounded-md cursor-pointer px-4 font-semibold
      "
		>
			Logout
		</button>
	);
}
