"use client";

import { ThemeContext } from "@/providers/ThemeProvider";
import Image from "next/image";
import React, { useContext } from "react";
const ThemeButton: React.FC = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	return (
		<button onClick={toggleTheme} className="p-2 mx-8">
			{theme === "light" ? (
				<Image src="/svgs/darkmode.svg" alt="dark icon" width={30} height={30} priority />
			) : (
				<Image src="/svgs/lightmode.svg" alt="light icon" width={30} height={30} priority />
			)}
		</button>
	);
};

export default ThemeButton;
