import { recents } from "@/utils/services";

const RecentDisplayPage = async ({ params }: { params: Promise<{ name: string }> }) => {
	const recent = (await params).name;
	const recentsDetails = recents.find((recent) => recent.name === recent);

	return <div>RecentServicePage</div>;
};

export default RecentDisplayPage;
