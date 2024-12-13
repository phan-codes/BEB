import Link from "next/link";
import React from "react";
import Reveal from "./Reveal";

const GetStarted = () => {
	return (
		<div className="bg-[#052DB9] flex flex-col items-center justify-center text-center text-gray-200 h-64 gap-y-6 py-6">
			<Reveal>
				<h1 className="font-semibold text-2xl md:text-3xl">Ready for the design changes you need? </h1>
			</Reveal>
			<Reveal>
				<Link
					href="/services"
					className="bg-[#e8bc37] inline-block py-2 px-4 font-bold text-gray-600 rounded-full  shadow-lg hover:bg-[#b3912b] animate-dangle">
					GET STARTED
				</Link>
			</Reveal>
		</div>
	);
};

export default GetStarted;
