import Companies from "@/components/Companies";
import GetStarted from "@/components/GetStarted";
import Hero from "@/components/Hero";
import HomeContacts from "@/components/HomeContacts";
import Services from "@/components/Services";

export default function Home() {
	return (
		<section>
			<Hero />
			<Companies />
			<Services />
			<GetStarted />
			<HomeContacts />
		</section>
	);
}
