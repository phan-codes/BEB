"use client";

import Image from "next/image";
import HamburgerMenu from "./HamburgerMenu";
import ThemeButton from "./ThemeButton";

const NavBar = () => {
	return (
		<div className=" flex justify-between items-center w-screen py-3 px-8 text-black dark:text-gray-400 dark:bg-black">
			<div>
				<Image src="/svgs/logo.svg" alt="logo" width={60} height={60} />
			</div>
			<div className="flex items-center">
				<ThemeButton />
				<HamburgerMenu />
			</div>
		</div>
	);
};

export default NavBar;
