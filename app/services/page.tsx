import { Metadata } from "next";
import Link from "next/link";
import { services } from "@/utils/services";
import Image from "next/image";
import Carousel from "@/components/Carousel";

export const metadata: Metadata = {
	title: "Services - B.E.B Wallcovering",
	description: "Wall coverings, BEB, B.E.B, Brett Bender, Good Wall covering services",
};

const ServicesPage = () => {
	return (
		<section className="py-14">
			<div className="bg-[#052DB9] flex items-center justify-center text-center h-64 py-6 px-7">
				<h1 className="font-semibold text-3xl leading-[50px] md:text-4xl md:leading-[60px] text-gray-300">
					Want to plan your project with us?
					<span className="text-[#e8bc37]">
						<Link href="/contact" className="px-4 hover:underline">
							Get a quote!
						</Link>
					</span>
				</h1>
			</div>
			<div className="flex flex-wrap w-full py-10 px-7 gap-y-10  justify-center md:gap-x-10">
				{services.map((service, index) => (
					<div key={index} className="flex flex-col ">
						<div className="max-w-lg">
							<Carousel autoSlide={true} autoSlideInterval={5000}>
								{service.images.map((img, index) => (
									<Image key={index} src={img} alt={service.name} width={600} height={600} />
								))}
							</Carousel>
						</div>
						<h2 className="text-lg font-bold pt-5 pb-3">{service.name}</h2>
						<div className="font-bold text-xs text-gray-700 ">
							{service.variety.map((variety, index) => (
								<p key={index} className="py-[2px]">
									- {variety}
								</p>
							))}
						</div>
					</div>
				))}
			</div>
			<div className="bg-[#052DB9] flex items-center justify-center text-center h-64 py-6 px-7">
				<h1 className="font-semibold text-3xl leading-[50px] md:text-4xl md:leading-[60px] text-gray-300">
					- Serving all of Southern California and Beyond -
				</h1>
			</div>

			<div className="flex justify-center items-center text-center py-10">
				<h2 className="font-bold">
					Recent Projects
					<hr className="h-1 border-b-solid border-[2px] border-[#e8bc37] outline-none w-36 my-3 rounded-full" />
				</h2>
				<div>
					<Link href=""></Link>
				</div>
			</div>
		</section>
	);
};

export default ServicesPage;
