const Footer = () => {
	const date = new Date().getFullYear();
	return (
		<div className="mt-6 py-10 text-center bg-[#052DB9] text-gray-400 text-sm"> &copy; BEB Wallcovering {date}</div>
	);
};

export default Footer;
