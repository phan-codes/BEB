import { Tailwind, Button, Html } from "@react-email/components";
import * as React from "react";

export default function Response() {
	return (
		<Tailwind>
			<Html>
				<Button href="https://example.com" className="bg-black text-white px-5 py-3">
					Click me
				</Button>
			</Html>
		</Tailwind>
	);
}
