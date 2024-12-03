import Link from "next/link";
import React from "react";

const GetStarted = () => {
	return (
		<div className="bg-[#052DB9] flex flex-col items-center justify-center text-center text-white h-64 gap-y-6 py-6">
			<h1 className="font-semibold text-2xl md:text-3xl">Ready for the design changes you need? </h1>
			<Link
				href=""
				className="bg-[#e8bc37] inline-block py-2 px-4 font-bold text-gray-600 rounded-full  shadow-lg hover:bg-[#b3912b]">
				GET STARTED
			</Link>
		</div>
	);
};

export default GetStarted;
