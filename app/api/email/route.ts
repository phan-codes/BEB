import Response from "@/emails/Response";
import { Resend } from "resend";

const resend = new Resend("re_ESRZy8aU_5LidaCbCuAKFf5ENYrJQyUd7");

export const POST = async (req: Request) => {
	const {} = await req.json();
	resend.emails.send({
		from: "onboarding@resend.dev",
		to: "osakwechibueze@gmail.com",
		subject: "Hello World",
		react: Response(),
	});
};
