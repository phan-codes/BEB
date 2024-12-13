import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

const HomeContacts = () => {
	return (
		<div className="px-10 py-14 flex flex-col justify-center items-center gap-y-6 bg-white dark:bg-dark md:flex-row text-center md:justify-around">
			<Reveal>
				<Link
					href="mailto:info@bebwallcovering.com"
					className="flex flex-col items-center justify-center gap-y-2 hover:bg-slate-200 px-5 py-3 rounded-full outline-none border-none dark:hover:bg-gradient-to-r dark:hover:from-[#161620] dark:hover:via-[#12121c] dark:hover:to-[#0d0c11] ">
					<Image src="/svgs/email.svg" alt="email icon" width={35} height={35} className="dark:invert" />
					<p className="text-sm mx-2 dark:text-gray-300">info@bebwallcovering.com</p>
				</Link>
			</Reveal>
			<Reveal>
				<Link
					href="/"
					className="flex flex-col items-center justify-center gap-y-2 hover:bg-slate-200 px-5 py-3 rounded-full outline-none border-none dark:hover:bg-gradient-to-r dark:hover:from-[#161620] dark:hover:via-[#12121c] dark:hover:to-[#0d0c11]">
					<Image src="/svgs/location.svg" alt="email icon" width={35} height={35} className="dark:invert" />
					<p className="text-sm dark:text-gray-300 mx-2 max-w-56">
						12223 Highland Ave #106-538 Rancho Cucamonga, CA 91739
					</p>
				</Link>
			</Reveal>

			<Reveal>
				<Link
					href="tel:+19094634222"
					className="flex flex-col items-center justify-center gap-y-2 hover:bg-slate-200 px-5 py-3 rounded-full outline-none border-none dark:hover:bg-gradient-to-r dark:hover:from-[#161620] dark:hover:via-[#12121c] dark:hover:to-[#0d0c11]">
					<Image src="/svgs/phone.svg" alt="email icon" width={35} height={35} className="dark:invert" />
					<p className="text-sm mx-2 dark:text-gray-300">(909) 463-4222</p>
				</Link>
			</Reveal>
		</div>
	);
};

export default HomeContacts;
