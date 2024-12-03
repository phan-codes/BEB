// import Image from "next/image";

import Companies from "@/components/Companies";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
	return (
		<div>
			<Hero />
			<Companies />
			<Services />
		</div>
	);
}
