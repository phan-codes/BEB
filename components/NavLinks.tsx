import React from "react";
import Link from "next/link";
import { NavLinkProp } from "./HamburgerMenu";

const NavLinks = ({ isMenuShown, hideMenu }: NavLinkProp) => {
	return (
		<div className="w-[80%] flex justify-center items-center">
			<div
				className="flex justify-between items-center w-[80%] py-1 
            px-5">
				<div className="hidden gap-x-2 justify-around items-center w-[70%] lg:flex">
					<Link
						href=""
						className='relative py-[2px] px-[6px] mx-2 hover:text-gray-400 before:content-[""] before:h-[2px] before:absolute before:bg-[#052DB9] before:w-0 before:-bottom-0 before:left-0 hover:before:w-14 before:duration-500'>
						HOME
					</Link>
					<Link
						href=""
						className='relative py-[2px] px-[6px] mx-2 hover:text-gray-400 before:content-[""] before:h-[2px] before:absolute before:bg-[#052DB9] before:w-0 before:-bottom-0 before:left-0 hover:before:w-24 before:duration-500'>
						ABOUT US
					</Link>
					<Link
						href=""
						className='relative py-[2px] px-[6px] mx-2 hover:text-gray-400 before:content-[""] before:h-[2px] before:absolute before:bg-[#052DB9] before:w-0 before:-bottom-0 before:left-0 hover:before:w-20 before:duration-500'>
						SERVICES
					</Link>
				</div>
				<div className="hidden lg:block">
					<Link
						href=""
						className="border-gray-700 border-solid border rounded-full py-1 px-4 bg-transparent outline-none hover:bg-gray-950">
						CONTACT US
					</Link>
				</div>

				{/* SMALL SCREEN NAVLINKS */}

				<div
					className={`absolute min-w-full h-fit flex justify-center top-[70px]  right-0 items-center flex-col bg-white dark:bg-gradient-to-r dark:from-[black] dark:via-[#000207] dark:to-black rounded-md lg:hidden  ${
						isMenuShown ? "gap-y-3 py-10 duration-700" : "opacity-0 py-0 gap-y-0 duration-300"
					}`}>
					<Link
						href=""
						className='relative py-[2px] px-[6px] mx-2 hover:text-gray-400 before:content-[""] before:h-[2px] before:absolute before:bg-[#052DB9] before:w-0 before:-bottom-0 before:left-0 hover:before:w-14 before:duration-500'
						onClick={hideMenu}>
						HOME
					</Link>
					<Link
						href=""
						className='relative py-[2px] px-[6px] mx-2 hover:text-gray-400 before:content-[""] before:h-[2px] before:absolute before:bg-[#052DB9] before:w-0 before:-bottom-0 before:left-0 hover:before:w-24 before:duration-500'
						onClick={hideMenu}>
						ABOUT US
					</Link>
					<Link
						href=""
						className='relative py-[2px] px-[6px] mx-2 hover:text-gray-400 before:content-[""] before:h-[2px] before:absolute before:bg-[#052DB9] before:w-0 before:-bottom-0 before:left-0 hover:before:w-20 before:duration-500'
						onClick={hideMenu}>
						SERVICES
					</Link>

					<Link
						href="#contact"
						className="border-gray-700 border-solid border rounded-full py-1 px-4 bg-transparent outline-none hover:bg-gray-100 dark:hover:bg-gray-950"
						onClick={hideMenu}>
						CONTACT US
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NavLinks;
