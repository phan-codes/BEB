"use client";

import Image from "next/image";
import React, { useContext } from "react";
import { ThemeContext } from "@/providers/ThemeProvider";
import Link from "next/link";

const Companies = () => {
	const { theme } = useContext(ThemeContext);
	return (
		<div className="flex w-full justify-around items-center py-3 px-10 overflow-hidden">
			<Link href="">
				<Image src="/wolfgordon.png" alt=" wolf gordon" width={100} height={50} className="mx-3" />
			</Link>
			<Link href="">
				<Image src="/koroseal.png" alt="koroseal" width={100} height={50} className="mx-3" />
			</Link>
			<Link href="">
				<Image
					src={`${theme === "light" ? "/innovations-e1466986811546.png" : "/innovationsdark.png"}`}
					alt="innovations"
					width={100}
					height={50}
					className="mx-3"
				/>
			</Link>
			<Link href="">
				<Image src="/mayaR-300x47.png" alt="mayar" width={100} height={50} className="mx-3" />
			</Link>
		</div>
	);
};

export default Companies;
