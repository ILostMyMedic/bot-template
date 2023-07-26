import { BasicInfo } from "./basicInfo";
import { Tags } from "./tags";
import { Components } from "./components";

// Swagger documentation for core
import { default as core } from "../router/client";

const swaggerDocument = {
	...BasicInfo,
	...Tags,
	...Components,
	paths: {
		...core,
	},
	security: [
		{
			ApiKeyAuth: [],
		},
	],
};

export default swaggerDocument;
