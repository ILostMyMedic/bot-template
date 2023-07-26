interface Tags {
	tags: {
		name: string;
		description?: string;
	}[];
}

export const Tags: Tags = {
	tags: [
		{
			name: "test",
			description: "This endpoint is for testing purposes only",
		},
		{
			name: "client",
			description: "Endpoint for controlling the client in Discord.JS",
		},
		{
			name: "guilds",
			description: "Endpoints for modifying guilds",
		},
		{
			name: "members",
			description: "Endpoints for member management",
		},
		{
			name: "messages",
			description: "Endpoints for message management",
		},
		{
			name: "roles",
			description: "Endpoints for role management",
		},
		{
			name: "channels",
			description: "Endpoints for channel management",
		},
	],
};
