import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
	return (
		<div className="flex flex-col justify-center items-center text-center gap-5 w-screen py-5 px-6 bg-white dark:bg-dark">
			<h1 className="py-5 w-44 font-bold text-lg ">
				Our Services{" "}
				<hr className="h-1 border-b-solid border-[2px] border-[#e8bc37] outline-none w-20 my-2 rounded-full translate-x-12 " />
			</h1>
			<p className="text-sm text-gray-500 py-5 px-7">
				We offer a variety of wallcovering and wall protection services to suit your specific needs.
			</p>
			<ServiceCard />
		</div>
	);
};

export default Services;
