import { ClientPresence } from "./presence";

export const Client = {
	paths: {
		"/presence": {
			...ClientPresence,
		},
	},
};
