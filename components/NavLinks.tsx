"use client";

import Link from "next/link";
import { NavLinkProp } from "./HamburgerMenu";
import { usePathname } from "next/navigation";

const NavLinks = ({ isMenuShown, hideMenu }: NavLinkProp) => {
	const pathname = usePathname();

	return (
		<div className="w-[80%] flex justify-center items-center">
			<div
				className="flex justify-between items-center w-[80%] py-1 
            px-5">
				<div className="hidden gap-x-2 justify-around items-center w-[70%] lg:flex">
					<Link
						href="/"
						className={`relative py-[2px] px-[6px] mx-2 hover:text-gray-400 dark:hover:text-gray-600 duration-500 ${
							pathname === "/"
								? 'before:content-[""] before:h-[2px] before:absolute before:bg-[#052DB9] before:-bottom-0 before:left-0 before:w-14 '
								: ""
						}`}>
						HOME
					</Link>
					<Link
						href="/about"
						className={`relative py-[2px] px-[6px] mx-2 hover:text-gray-400 dark:hover:text-gray-600 duration-500 ${
							pathname === "/about"
								? 'before:content-[""] before:h-[2px] before:absolute before:bg-[#052DB9] before:-bottom-0 before:left-0 before:w-[86px]'
								: ""
						}`}>
						ABOUT US
					</Link>
					<Link
						href="/services"
						className={`relative py-[2px] px-[6px] mx-2 hover:text-gray-400 dark:hover:text-gray-600 duration-500 ${
							pathname === "/services"
								? 'before:content-[""] before:h-[2px] before:absolute before:bg-[#052DB9] before:-bottom-0 before:left-0 before:w-20'
								: ""
						}`}>
						SERVICES
					</Link>
				</div>
				<div className="hidden lg:block">
					<Link
						href="/contact"
						className={`border-gray-400 dark:border-gray-700 border-solid border rounded-full py-2 px-4 bg-transparent outline-none hover:bg-gray-100 dark:hover:bg-gray-950 duration-500 ${
							pathname === "/contact" ? "bg-gray-100 dark:bg-gray-950" : ""
						}`}>
						CONTACT US
					</Link>
				</div>

				{/* SMALL SCREEN NAVLINKS */}

				<div
					className={`absolute z-50 min-w-full h-fit flex justify-center top-[70px]  right-0 items-center flex-col bg-white dark:bg-gradient-to-r dark:from-[black] dark:via-[#000207] dark:to-black rounded-md lg:hidden ${
						isMenuShown ? "gap-y-3 py-10 duration-700" : "opacity-0 py-0 gap-y-0 duration-300"
					}`}>
					<Link
						href="/"
						className={`relative py-[2px] px-[6px] mx-2 hover:text-gray-400 dark:hover:text-gray-600 duration-500 ${
							pathname === "/"
								? 'before:content-[""] before:h-[2px] before:absolute before:bg-[#052DB9] before:-bottom-0 before:left-0 before:w-14'
								: ""
						}`}
						onClick={hideMenu}>
						HOME
					</Link>
					<Link
						href="/about"
						className={`relative py-[2px] px-[6px] mx-2 hover:text-gray-400 dark:hover:text-gray-600 duration-500 ${
							pathname === "/about"
								? 'before:content-[""] before:h-[2px] before:absolute before:bg-[#052DB9] before:-bottom-0 before:left-0 before:w-[86px]'
								: ""
						}`}
						onClick={hideMenu}>
						ABOUT US
					</Link>
					<Link
						href="/services"
						className={`relative py-[2px] px-[6px] mx-2 hover:text-gray-400 dark:hover:text-gray-600 duration-500 ${
							pathname === "/services"
								? 'before:content-[""] before:h-[2px] before:absolute before:bg-[#052DB9] before:-bottom-0 before:left-0 before:w-20'
								: ""
						}`}
						onClick={hideMenu}>
						SERVICES
					</Link>

					<Link
						href="/contact"
						className={`border-gray-400 dark:border-gray-700 border-solid border rounded-full py-2 px-4 bg-transparent outline-none hover:bg-gray-100 dark:hover:bg-gray-950 duration-500 ${
							pathname === "/contact" ? "bg-gray-100 dark:bg-gray-950" : ""
						}`}
						onClick={hideMenu}>
						CONTACT US
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NavLinks;
