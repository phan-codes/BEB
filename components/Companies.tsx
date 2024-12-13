"use client";

import Image from "next/image";
import React, { useContext } from "react";
import { ThemeContext } from "@/providers/ThemeProvider";
import Link from "next/link";

const Companies = () => {
	const { theme } = useContext(ThemeContext);
	return (
		<div className="flex overflow-hidden group">
			<div className="flex min-w-full justify-around items-center py-3 gap-x-6 border-b border-solid border-gray-200 dark:border-gray-900 animate-scroll group-hover:paused">
				<Link href="https://www.wolfgordon.com/" className="inline-block max-w-none" target="_blank">
					<Image src="/wolfgordon.png" alt=" wolf gordon" width={150} height={70} />
				</Link>

				<Link href="https://koroseal.com/" className="inline-block max-w-none" target="_blank">
					<Image src="/koroseal.png" alt="koroseal" width={150} height={70} />
				</Link>
				<Link href="https://www.innovationsusa.com/" className="inline-block max-w-none" target="_blank">
					<Image
						src={`${theme === "light" ? "/innovations-e1466986811546.png" : "/innovationsdark.png"}`}
						alt="innovations"
						width={150}
						height={70}
					/>
				</Link>
				<Link href="https://www.mayaromanoff.com/" className="inline-block mx-3 max-w-none" target="_blank">
					<Image src="/mayaR-300x47.png" alt="mayar" width={150} height={70} />
				</Link>
			</div>

			{/* Duplicate */}

			<div className="flex min-w-full justify-around items-center py-3 gap-x-6 border-b border-solid border-gray-200 dark:border-gray-900 animate-scroll aria-hidden group-hover:paused">
				<Link href="https://www.wolfgordon.com/" className="inline-block max-w-none" target="_blank">
					<Image src="/wolfgordon.png" alt=" wolf gordon" width={150} height={70} />
				</Link>

				<Link href="https://koroseal.com/" className="inline-block max-w-none" target="_blank">
					<Image src="/koroseal.png" alt="koroseal" width={150} height={70} />
				</Link>
				<Link href="https://www.innovationsusa.com/" className="inline-block max-w-none" target="_blank">
					<Image
						src={`${theme === "light" ? "/innovations-e1466986811546.png" : "/innovationsdark.png"}`}
						alt="innovations"
						width={150}
						height={70}
					/>
				</Link>
				<Link href="https://www.mayaromanoff.com/" className="inline-block mx-3 max-w-none" target="_blank">
					<Image src="/mayaR-300x47.png" alt="mayar" width={150} height={70} />
				</Link>
			</div>
		</div>
	);
};

export default Companies;
