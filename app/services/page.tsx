import { Metadata } from "next";
import Link from "next/link";
import { services, recents } from "@/utils/services";
import Image from "next/image";
import { Carousel } from "@/components/Carousel";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
	title: "Services - B.E.B Wallcovering",
	description: "Wall coverings, BEB, B.E.B, Brett Bender, Good Wall covering services",
};

const ServicesPage = () => {
	return (
		<section className="py-14">
			<Reveal>
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
			</Reveal>

			<Reveal>
				<div className="flex flex-wrap w-full py-10 px-7 gap-y-10  justify-center md:gap-x-10">
					{services.map((service, index) => (
						<div key={index} className="flex flex-col min-w-full">
							<div className="max-w-lg px-7">
								<Carousel autoSlide={true} autoSlideInterval={5000}>
									{service.images.map((img, index) => (
										<Image key={index} src={img} alt={service.name} width={900} height={600} className="rounded-md" />
									))}
								</Carousel>
							</div>
							<h2 className="text-lg font-bold pt-5 pb-3">{service.name}</h2>
							<div className="font-bold text-xs text-gray-500 dark:text-gray-700 ">
								{service.variety.map((variety, index) => (
									<p key={index} className="py-[2px]">
										- {variety}
									</p>
								))}
							</div>
						</div>
					))}
				</div>
			</Reveal>

			<div className="bg-[#052DB9] flex items-center justify-center text-center h-64 py-6 px-7">
				<Reveal>
					<h1 className="font-semibold text-3xl leading-[50px] md:text-4xl md:leading-[60px] text-gray-300">
						- Serving all of Southern California and Beyond -
					</h1>
				</Reveal>
			</div>

			<div className="flex flex-col justify-center items-center text-center py-10">
				<Reveal>
					<h2 className="font-bold">
						Recent Projects
						<hr className="h-1 border-b-solid border-[2px] border-[#e8bc37] outline-none w-36 my-3 rounded-full" />
					</h2>
				</Reveal>

				<Reveal>
					<div className="flex flex-col justify-center items-center pt-10 gap-y-10 w-full md:flex-row md:gap-x-5 lg:gap-x-10">
						{recents.map(({ id, name, linkImage }) => (
							<div key={id} className="pt-10 flex flex-col gap-y-5 px-5">
								<Link
									href={`/services/${id}`}
									className="inline-flex max-h-60 max-w-96 justify-between md:max-h-32 md:max-w-44 group relative">
									<Image src={linkImage} alt={name} width={500} height={200} className="rounded-md" />
									<div className="absolute inset-0 opacity-0 bg-[#052DB9] rounded-md group-hover:opacity-50 duration-500 flex justify-center items-center">
										<p className="text-base md:text-sm text-white">View &#8594;</p>
									</div>
								</Link>
								<h3 className="text-gray-700 dark:text-gray-300">{name}</h3>
							</div>
						))}
					</div>
				</Reveal>
			</div>
		</section>
	);
};

export default ServicesPage;
