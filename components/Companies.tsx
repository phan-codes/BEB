import Image from "next/image";
import React from "react";

const Companies = () => {
	return (
		<div className="flex w-full justify-around items-center py-3 px-10 overflow-hidden">
			<Image src="/wolfgordon.png" alt=" wolf gordon" width={100} height={50} className="mx-3" />
			<Image src="/koroseal.jpg" alt="koroseal" width={100} height={50} className="mx-3" />
			<Image src="/innovations-e1466986811546.png" alt="innovations" width={100} height={50} className="mx-3" />
			<Image src="/mayaR-300x47.jpg" alt="mayar" width={100} height={50} className="mx-3" />
		</div>
	);
};

export default Companies;
