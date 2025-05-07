"use client";

import { trpcClient } from "@/trpc/client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const login = trpcClient.login.useMutation({
		onSuccess: () => {
			alert("Login successful");
			router.push("/dashboard");
		},
		onError: (error) => {
			console.error("Login failed:", error);
		},
	});

	const signUp = trpcClient.signUp.useMutation({
		onSuccess: () => {
			alert("Signup successful, please log in. Don't forget to confirm email");
		},
		onError: (error) => {
			console.error("Signup failed:", error);
		},
	});

	return (
		<div className="flex flex-col gap-2 max-w-sm mx-auto mt-20">
			<h1 className="text-2xl font-bold">Login</h1>
			<p className="text-gray-600 mb-2">
				Enter your email and password, click sign up, then log in.
			</p>
			<input
				placeholder="Email"
				className="border-2 border-gray-300 rounded-md p-2"
				required
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				type="password"
				placeholder="Password"
				className="border-2 border-gray-300 rounded-md p-2"
				required
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button
				className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
				onClick={async () => {
					try {
						await login.mutateAsync({ email, password });
					} catch (error) {
						console.error("Login failed:", error);
					}
				}}
				type="button"
			>
				Log in
			</button>
			<button
				className="bg-zinc-500 text-white p-2 rounded-md cursor-pointer"
				onClick={async () => {
					try {
						await signUp.mutateAsync({ email, password });
					} catch (error) {
						console.error("Signup failed:", error);
					}
				}}
				type="button"
			>
				Sign up
			</button>
		</div>
	);
}
