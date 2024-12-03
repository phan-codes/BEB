import Image from "next/image";
import Link from "next/link";

const HomeContacts = () => {
	return (
		<div className="px-10 py-14 flex flex-col justify-center items-center gap-y-6 bg-light dark:bg-dark md:flex-row text-center md:justify-around">
			<Link
				href=""
				className="flex flex-col items-center justify-center gap-y-2 hover:bg-slate-100 px-5 py-3 rounded-full outline-none border-none dark:hover:bg-gradient-to-r dark:hover:from-[#161620] dark:hover:via-[#12121c] dark:hover:to-[#0d0c11] ">
				<Image src="/svgs/email.svg" alt="email icon" width={35} height={35} className="dark:invert" />
				<p className="text-sm mx-2">info@bebwallcovering.com</p>
			</Link>

			<Link
				href=""
				className="flex flex-col items-center justify-center gap-y-2 hover:bg-slate-100 px-5 py-3 rounded-full outline-none border-none dark:hover:bg-gradient-to-r dark:hover:from-[#161620] dark:hover:via-[#12121c] dark:hover:to-[#0d0c11]">
				<Image src="/svgs/location.svg" alt="email icon" width={35} height={35} className="dark:invert" />
				<p className="text-sm mx-2 max-w-56">12223 Highland Ave #106-538 Rancho Cucamonga, CA 91739</p>
			</Link>

			<Link
				href=""
				className="flex flex-col items-center justify-center gap-y-2 hover:bg-slate-100 px-5 py-3 rounded-full outline-none border-none dark:hover:bg-gradient-to-r dark:hover:from-[#161620] dark:hover:via-[#12121c] dark:hover:to-[#0d0c11]">
				<Image src="/svgs/phone.svg" alt="email icon" width={35} height={35} className="dark:invert" />
				<p className="text-sm mx-2">(909) 463-4222</p>
			</Link>
		</div>
	);
};

export default HomeContacts;
