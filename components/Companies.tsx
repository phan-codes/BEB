"use client";

import Image from "next/image";
import React, { useContext } from "react";
import { ThemeContext } from "@/providers/ThemeProvider";
import Link from "next/link";

const Companies = () => {
	const { theme } = useContext(ThemeContext);
	return (
		<div className="flex w-full justify-around items-center py-3 px-10 gap-x-6 overflow-hidden">
			<Link href="inline-block mx-3">
				<Image src="/wolfgordon.png" alt=" wolf gordon" width={150} height={70} />
			</Link>
			<Link href="">
				<Image src="/koroseal.png" alt="koroseal" width={150} height={70} />
			</Link>
			<Link href="">
				<Image
					src={`${theme === "light" ? "/innovations-e1466986811546.png" : "/innovationsdark.png"}`}
					alt="innovations"
					width={150}
					height={70}
				/>
			</Link>
			<Link href="" className="">
				<Image src="/mayaR-300x47.png" alt="mayar" width={150} height={70} />
			</Link>
		</div>
	);
};

export default Companies;
