import env from "dotenv";
import environment from "../../utils/environment";
env.config();

interface BasicInfo {
	openapi: string; // add this line to specify the OpenAPI version
	info: {
		title: string;
		description: string;
		version: string;
	};
	servers: {
		url: string;
	}[];
	apis: string[];
	type: string;
}

export const BasicInfo: BasicInfo = {
	openapi: "3.0.0",
	info: {
		title: "CoffeeBot API",
		version: "1.0.0",
		description: "API for CoffeeBot Discord bot",
	},
	servers: [
		{
			url: `http://localhost:${environment.PORT}/api`,
		},
	],
	apis: ["../../**/*.ts"],
	type: "module",
};
