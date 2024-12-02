import Link from "next/link";
import React from "react";

const Hero = () => {
	return (
		<div className="bg-light flex flex-col gap-y-5 justify-center items-center text-center py-10 px-6 dark:bg-dark">
			<h1 className="text-5xl text-black leading-normal dark:text-white max-w-96">Quality - Experience - Dedication</h1>
			<p className="text-sm text-gray-500">Serving the Southern California region and beyond.</p>
			<Link
				href="/services"
				className="bg-[#052DB9] inline-block py-2 px-4 font0-bold text-white rounded-full shadow-lg hover:bg-[#1f368a]">
				Services
			</Link>
		</div>
	);
};

export default Hero;
