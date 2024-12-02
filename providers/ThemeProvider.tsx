"use client";

import { createContext, useEffect, useState } from "react";
import { ThemeContextProps } from "@/types";

export const ThemeContext = createContext<ThemeContextProps>({
	theme: "light",
	toggleTheme: () => {},
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState<"light" | "dark">("light");

	useEffect(() => {
		const storedTheme = localStorage.getItem("theme") as "light" | "dark";
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

		if (storedTheme) {
			setTheme(storedTheme);
			document.documentElement.classList.add(storedTheme);
		} else if (prefersDark) {
			setTheme("dark");
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.add("light");
		}
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		document.documentElement.classList.remove(theme);
		document.documentElement.classList.add(newTheme);
		localStorage.setItem("theme", newTheme);
	};

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
