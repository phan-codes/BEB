import Image from "next/image";
import Link from "next/link";

const ServiceCard = () => {
	return (
		<div className="flex flex-wrap w-full gap-y-7 justify-center items-center gap-x-10 pt-10 pb-16">
			<div className="flex flex-col border-solid border-[2px] flex-wrap border-gray-500 rounded-lg h-fit max-w-96 bg-gray-50 hover:border-[#e8bc37] dark:bg-gradient-to-r dark:from-[#161620] dark:via-[#12121c] dark:to-[#0d0c11] hover:-translate-y-2 duration-700">
				<div className="m-5 ">
					<Link href="">
						<Image src="/vinylwallpaper.jpg" alt="vinyl" width={300} height={200} className="w-full h-64 pb-4" />
						<h1 className="font-bold text-[#e8bc37]">Vinyl wallcovering and wall papers</h1>
						<p className="text-xs leading-5 text-gray-400 py-2 text-wrap">
							We offer professional quality installation of all types of commercial vinyl wallcoverings, patterned
							rolled goods, digital murals, and dry erase.
						</p>
					</Link>
				</div>
			</div>

			<div className="flex flex-col border-solid border-[2px] flex-wrap border-gray-500 rounded-lg h-fit max-w-96 bg-gray-50 hover:border-[#e8bc37] dark:bg-gradient-to-r dark:from-[#161620] dark:via-[#12121c] dark:to-[#0d0c11] hover:-translate-y-3 duration-700">
				<div className="m-5 ">
					<Link href="">
						<Image src="/wallprotection.jpg" alt="vinyl" width={300} height={200} className="w-full h-64 pb-4" />
						<h1 className="font-bold text-[#e8bc37]">Wall protection</h1>
						<p className="text-xs leading-5 text-gray-400 py-4">
							We&apos;re fully experienced in installation of rigid vinyl sheet wall protection and FRP products.
						</p>
					</Link>
				</div>
			</div>

			<div className="flex flex-col border-solid border-[2px] flex-wrap border-gray-500 rounded-lg h-fit max-w-96 bg-gray-50 hover:border-[#e8bc37] dark:bg-gradient-to-r dark:from-[#161620] dark:via-[#12121c] dark:to-[#0d0c11] hover:-translate-y-3 duration-700">
				<div className="m-5 ">
					<Link href="">
						<Image src="/tackable.jpg" alt="vinyl" width={300} height={200} className="w-full h-64 pb-4" />
						<h1 className="font-bold text-[#e8bc37]">Tackable wall panels</h1>
						<p className="text-xs leading-5 text-gray-400 py-4">
							We expertly install vinyl or fabric covered tackable wall panels, as well as specialized acoustic wall
							panels.
						</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;
