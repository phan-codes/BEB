import Link from "next/link";

const ContactPage = () => {
	return (
		<section className="flex flex-col justify-center items-center w-full text-center overflow-hidden">
			<div className="flex flex-col justify-center items-center lg:flex-row w-full lg:items-start">
				<div className=" py-10 px-7 w-full lg:basis-[50%] lg:px-10">
					<h1 className=" w-44 font-bold text-lg dark:text-gray-300">
						CONTACT US
						<hr className="h-1 border-b-solid border-[2px] border-[#e8bc37] outline-none w-20 my-2 rounded-full translate-x-12 " />
					</h1>
					<form action="submit" className="py-8">
						<div className="relative">
							<input
								type="text"
								name="name"
								required
								placeholder="Your Name"
								className="p-2 mb-6 peer w-full dark:bg-gray-100 placeholder-transparent  text-black outline-none caret-black dark:caret-gray-400 peer border border-gray-200 bg-gray-50 dark:bg-transparent dark:border dark:border-gray-800 rounded-md"
							/>
							<label
								htmlFor="name"
								className="absolute -top-6 left-0
								text-gray-600 dark:text-gray-300 text-sm p-2 pointer-events-none peer-placeholder-shown:top-1 dark:peer-placeholder-shown:text-gray-400   peer-focus:-top-8 dark:peer-focus:text-gray-300 duration-500">
								Your Name*
							</label>
						</div>
						<div className="relative py-2">
							<input
								type="email"
								name="email"
								required
								placeholder="Your Email*"
								className="p-2 mb-6 peer w-full dark:bg-gray-100 placeholder-transparent  text-black outline-none caret-black dark:caret-gray-400 peer border border-gray-200 bg-gray-50 dark:bg-transparent dark:border dark:border-gray-800 rounded-md"
							/>
							<label
								htmlFor="email"
								className="absolute -top-6 left-0
								text-gray-600 dark:text-gray-300 text-sm p-2 pointer-events-none peer-placeholder-shown:top-2 dark:peer-placeholder-shown:text-gray-400   peer-focus:-top-6 dark:peer-focus:text-gray-300 duration-500">
								Your Email*
							</label>
						</div>
						<div className="relative py-2">
							<input
								type="text"
								name="subject"
								required
								placeholder="Subject"
								className="p-2 mb-6 peer w-full dark:bg-gray-100 placeholder-transparent  text-black outline-none caret-black dark:caret-gray-400 peer border border-gray-200 bg-gray-50 dark:bg-transparent dark:border dark:border-gray-800 rounded-md"
							/>
							<label
								htmlFor="subject"
								className="absolute -top-6 left-0
								text-gray-600 dark:text-gray-300 text-sm p-2 pointer-events-none peer-placeholder-shown:top-2 dark:peer-placeholder-shown:text-gray-400   peer-focus:-top-6 dark:peer-focus:text-gray-300 duration-500">
								Subject
							</label>
						</div>
						<div className="relative py-2">
							<textarea
								name="message"
								required
								placeholder="Message"
								className="text-black outline-none p-3 mb-6 caret-black dark:caret-gray-400 peer w-full border border-gray-200 bg-gray-50 dark:bg-transparent min-h-44 dark:border dark:border-gray-800 placeholder-transparent rounded-md"
							/>
							<label
								htmlFor="message"
								className="absolute -top-6 left-0
								text-gray-600 dark:text-gray-300 text-sm p-2 pointer-events-none peer-placeholder-shown:top-2 dark:peer-placeholder-shown:text-gray-400   peer-focus:-top-6 dark:peer-focus:text-gray-300 duration-500">
								Message
							</label>
						</div>
						<input
							type="submit"
							className="inline-bloc shadow-lg px-4 py-2 w-full outline-none border-none dark:text-gray-300 rounded-md bg-[#052DB9] hover:bg-[#1f368a]"
							value="Submit"
						/>
					</form>
				</div>

				<div className="basis-[50%] flex flex-col justify-center items-center py-10 gap-y-2 lg:self-center">
					<h2 className="font-bold">
						Our Office
						<hr className="h-1 border-b-solid border-[2px] border-[#e8bc37] outline-none w-52 my-3 rounded-full " />
					</h2>

					<div>
						<div className="text-sm text-gray-600 py-5 rounded-md px-12 leading-6 w-full shadow-lg lg:px-24 dark:shadow-gray-900 dark:shadow-md">
							12223 Highland Ave <br /> #106-538 <br /> Rancho Cucamonga, CA 91739 <br />
							<div className="mt-5 py-10 ">
								<span>
									Phone:
									<Link href="tel:+19094634222" className="text-[#e8bc37] hover:underline">
										909 463-4222
									</Link>
								</span>
								<br />
								<span>Fax: 909 463-7447</span> <br />
								<span>
									Email:
									<Link href="mailto:info@bebwallcovering.com" className="text-[#e8bc37] hover:underline">
										info@bebwallcovering.com
									</Link>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactPage;
