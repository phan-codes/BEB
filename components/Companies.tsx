"use client";

import Image from "next/image";
import React, { useContext } from "react";
import { ThemeContext } from "@/providers/ThemeProvider";
import Link from "next/link";
import Reveal from "./Reveal";

const Companies = () => {
	const { theme } = useContext(ThemeContext);
	return (
		<Reveal>
			<div className="flex w-full justify-around items-center py-3 px-10 gap-x-6 border-b border-solid border-gray-200 dark:border-gray-900">
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
		</Reveal>
	);
};

export default Companies;
