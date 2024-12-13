import { recents } from "@/utils/services";
import Image from "next/image";
import { Carousel } from "@/components/Carousel";
import { RecentServicesTypeProp } from "@/types";

const RecentDisplayPage = async ({ params }: { params: Promise<{ id: number }> }) => {
	const id = (await params).id;

	const recent = recents.find((recent) => recent?.id == id) as RecentServicesTypeProp;

	return (
		<div className="flex flex-col justify-center items-center py-16">
			<p className="px-7 py-5 text-3xl font-bold uppercase text-gray-400 text-center">{recent?.name}</p>
			<div className="max-w-lg px-7">
				<Carousel autoSlide={false} autoSlideInterval={5000}>
					{recent?.images.map(({ src }, index) => (
						<Image key={index} src={src} alt={recent?.name} width={900} height={600} className="rounded-md" />
					))}
				</Carousel>
			</div>
		</div>
	);
};

export default RecentDisplayPage;
