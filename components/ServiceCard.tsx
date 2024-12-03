import Image from "next/image";
import Link from "next/link";

const ServiceCard = () => {
	return (
		<div className="flex flex-col border-solid border-[2px] border-gray-500 p-10 rounded-lg hover:border-[#e8bc37]">
			<Link href="">
				<Image src="/vinylwallpaper.jpg" alt="vinyl" width={300} height={300} />
			</Link>
			<h1>Vinyl wallcovering and wall papers</h1>
			<p>
				We offer professional quality installation of all types of commercial vinyl wallcoverings, patterned rolled
				goods, digital murals, and dry erase.
			</p>
		</div>
	);
};

export default ServiceCard;
