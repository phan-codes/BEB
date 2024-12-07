import { StaticImageData } from "next/image";

export interface ThemeContextProps {
	theme: "light" | "dark";
	toggleTheme: () => void;
}

export interface ServicesTypeProp {
	name: string;
	variety: string[];
	images: StaticImageData[];
}

export interface CarouselProps {
	children: React.ReactElement[];
	autoSlide: boolean;
	autoSlideInterval: number;
}
