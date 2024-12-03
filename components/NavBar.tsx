"use client";

import Image from "next/image";
import HamburgerMenu from "./HamburgerMenu";
import ThemeButton from "./ThemeButton";
import NavLinks from "./NavLinks";
import { useState } from "react";

const NavBar = () => {
	const [isMenuShown, setIsMenuShown] = useState(false);

	const handleMenuShow = () => {
		setIsMenuShown(!isMenuShown);
	};

	const hideMenu = () => {
		setIsMenuShown(false);
	};
	return (
		<div className=" relative flex justify-between items-center w-full py-3 px-5 text-black dark:text-gray-400 dark:bg-black">
			<div className="flex justify-center items-center">
				<Image src="/svgs/logo.svg" alt="logo" width={80} height={80} />
				<span className="translate-y-3 -translate-x-4 font-bold text-[#e8bc37]">B.E.B</span>
			</div>
			<NavLinks isMenuShown={isMenuShown} hideMenu={hideMenu} />

			<ThemeButton />
			<HamburgerMenu isMenuShown={isMenuShown} handleMenuShow={handleMenuShow} />
		</div>
	);
};

export default NavBar;
