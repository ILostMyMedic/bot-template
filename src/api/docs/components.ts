export const Components = {
	components: {
		schemas: {
			Presence: {
				type: "object",
				properties: {
					status: {
						type: "string",
					},
					activityName: {
						type: "string",
					},
					activityType: {
						type: "string",
					},
					activityUrl: {
						type: "string",
					},
				},
			},
			Error: {
				type: "object",
				properties: {
					message: {
						type: "string",
					},
					http_status_code: {
						type: "string",
					},
				},
			},
		},
		securitySchemes: {
			ApiKeyAuth: {
				type: "apiKey",
				in: "header",
				name: "Authorization",
			},
		},
	},
};
