import type { Config } from "tailwindcss";

export default {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			backgroundImage: {
				dark: "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.8),  rgba(0,0,0,0.7)), url('../public/dark.png')",
				light:
					"linear-gradient(to bottom, rgba(100,100,100,0), rgba(100,100,100,0.05),  rgba(100,100,100,0)), url('../public/light.png')",
			},
		},
	},
	plugins: [],
} satisfies Config;
