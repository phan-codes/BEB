"use client";

import Image from "next/image";
import HamburgerMenu from "./HamburgerMenu";
import ThemeButton from "./ThemeButton";

const NavBar = () => {
	return (
		<div className=" flex justify-between items-center w-full py-3 px-8 text-black dark:text-gray-400 dark:bg-black">
			<div className="flex justify-center items-center">
				<Image src="/svgs/logo.svg" alt="logo" width={60} height={60} />
				<span className="translate-y-2 -translate-x-3 font-bold text-[#e8bc37]">B.E.B</span>
			</div>
			<div className="flex items-center justify-center">
				<ThemeButton />
				<HamburgerMenu />
			</div>
		</div>
	);
};

export default NavBar;
