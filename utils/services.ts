import { RecentServicesTypeProp, ServicesTypeProp } from "@/types";
import vinyl1 from "@/public/vinyl1.jpg";
import vinyl2 from "@/public/vinyl2.jpg";
import vinyl3 from "@/public/vinyl3.jpg";
import rolledgoods from "@/public/rolledgoods.jpg";
import rolledgoods2 from "@/public/rolledgoods2.jpg";
import digitalmurals from "@/public/digitalmurals.jpg";
import digitalmurals2 from "@/public/digitalmurals2.jpg";
import wallprotection from "@/public/wallprotection1.jpg";
import wallprotection2 from "@/public/wallprotection2.jpg";
import panels from "@/public/panels.jpg";
import panels2 from "@/public/panels2.jpg";
import specialtyProd from "@/public/specialtyprod.jpg";
import specialtyProd2 from "@/public/specialtyprod2.jpg";

import jc from "@/public/jc.jpg";
import hollywood from "@/public/hollywood.jpg";
import hollywood2 from "@/public/hollywood2.jpg";
import victoria from "@/public/victoria.jpg";
import victoria2 from "@/public/victoria2.jpg";
import pasea from "@/public/pasea.jpg";
import pasea2 from "@/public/pasea2.jpg";
import pasea3 from "@/public/pasea3.jpg";

export const services: ServicesTypeProp[] = [
	{
		name: "Vinyl Wallcoverings",
		variety: ["Solid Vinyl", "Paper backed Vinyl", "Fabric backed", "Magnetic and non-magnetic dry erase"],
		images: [vinyl1, vinyl2, vinyl3],
	},
	{
		name: "Rolled Goods",
		variety: ["Vinyl Coated", "Flocked", "Grasscloth", "Foil"],
		images: [rolledgoods, rolledgoods2],
	},
	{
		name: "Digital Murals",
		variety: ["Customized large format digital murals on vinyl.", "Peel and stick self adhesive wall murals."],
		images: [digitalmurals, digitalmurals2],
	},
	{
		name: "Wall Protection",
		variety: ["Rigid vinyl wall protection", "FRP"],
		images: [wallprotection, wallprotection2],
	},
	{
		name: "Panels",
		variety: ["Acoustic wall panels", "Tackable wall panels", "Vinyl covered", "Fabric covered"],
		images: [panels, panels2],
	},

	{
		name: "Other Specialty Products",
		variety: ["Crash rail", "Corner guards", "Marker boards"],
		images: [specialtyProd, specialtyProd2],
	},
];

export const recents: RecentServicesTypeProp[] = [
	{
		id: 1,
		name: "J.C. Penney",
		linkImage: jc,
		images: [jc],
	},
	{
		id: 2,
		name: "Hollywood Park Casino",
		linkImage: hollywood,
		images: [hollywood, hollywood2],
	},
	{
		id: 3,
		name: "Victoria’s Secret",
		linkImage: victoria,
		images: [victoria, victoria2],
	},
	{
		id: 4,
		name: "Pasea Hotel and Spa",
		linkImage: pasea,
		images: [pasea, pasea2, pasea3],
	},
];
