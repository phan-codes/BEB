import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
	return (
		<section className="">
			<div className="flex flex-col justify-center items-center w-screen text-center">
				<h1 className="py-5 w-44 font-bold text-lg ">
					ABOUT US
					<hr className="h-1 border-b-solid border-[2px] border-[#e8bc37] outline-none w-20 my-2 rounded-full translate-x-12 " />
					<div className=" ">
						{/* <Image src="/aboutpics.jpg" alt="about" width={100} height={100} className="w-full" /> */}
					</div>
				</h1>
				<div className="flex flex-col justify-center items-center lg:flex-row lg:items-start">
					<div className="basis-[50%] py-10">
						<h1 className="font-bold py-3">Our Team</h1>
						<article className="text-sm text-gray-600 px-7 leading-8 lg:px-24">
							Our wallcovering business can look back on many years of experience and many successfully completed
							projects. Satisfied customers are our motivation to perform our work with reliability, punctuality and
							trustworthiness. Our highly trained and versatile team of professionals put quality and reputation first.
							Having served the area for over 25 years, we have worked on a wide range of commercial and institutional
							projects from Universities and hospital buildings to major hotels as well as historic restorations. We
							install all types of wallcovering and wall protection and we are fully insured and bonded. Would you like
							to learn more about us? Simply contact us at{" "}
							<Link href="tel:+19094634222" className="text-[#e8bc37]">
								909 463-4222
							</Link>{" "}
							We look forward to hearing from you!
						</article>
					</div>

					<div className="basis-[50%] flex flex-col justify-center items-center py-10 gap-y-2">
						<div className=" rounded-full border-[#052DB9] border-[3px] border-solid bg-[#052DB9]">
							<Image src="/BrettBender.jpg" alt="Brett" width={100} height={100} className="rounded-full" />
						</div>
						<h2 className="font-bold">Brett Bender</h2>
						<h3 className="text-sm">President</h3>

						<div>
							<p className="text-sm text-gray-600 px-7 leading-8 lg:px-24">
								Brett took over the reins of BEB Wallcovering from his father in 1990. Since that time Brett as overseen
								the growth of the business year over year. This is largely due to the fact that BEB Wallcovering
								continues to expand its returning customer base.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutPage;
