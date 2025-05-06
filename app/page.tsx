'use client'

import { trpc } from "@/trpc/client";

export default function Home() {
  const greeting = trpc.hello.useQuery({ text: "world" });

  return (
    <div>
     {greeting.data?.greeting}
    </div>
  );
}
