import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const poppins = Poppins({
	weight: ["400", "700"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Home - B.E.B Wallcovering",
	description: "Wall coverings, BEB, B.E.B, Brett Bender, Good Wall covering services",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<ThemeProvider>
				<body className={`${poppins.className} text-black dark:text-white dark:bg-black bg-white flex flex-col`}>
					<NavBar />
					{children}
					<Footer />
				</body>
			</ThemeProvider>
		</html>
	);
}
