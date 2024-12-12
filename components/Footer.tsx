const Footer = () => {
	const date = new Date().getFullYear();
	return (
		<div className="mt-auto py-10 text-center bg-[#052DB9] text-gray-400 text-sm justify-self-end">
			{" "}
			&copy; BEB Wallcovering {date}
		</div>
	);
};

export default Footer;
