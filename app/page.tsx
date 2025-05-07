import HomePageContent from "@/components/home-page-content";
import { trpcServer } from "@/trpc/server";

export default async function Home() {
	void trpcServer.hello.prefetch();

	return <HomePageContent />;
}
