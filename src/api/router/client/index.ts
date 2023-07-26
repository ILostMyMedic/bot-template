export default {
	"/v1/bot/uptime": {
		get: {
			summary: "Returns the bot's uptime",
			operationId: "getUptime",
			tags: ["client"],
			responses: {
				200: {
					description: "Success",
					content: {
						"application/json": {
							schema: {
								type: "object",
								properties: {
									days: {
										type: "number",
										example: 0,
									},
									hours: {
										type: "number",
										example: 0,
									},
									minutes: {
										type: "number",
										example: 0,
									},
									seconds: {
										type: "number",
										example: 0,
									},
									miliseconds: {
										type: "number",
										example: 0,
									},
									timestamp: {
										type: "string",
										example: "00:00:00",
									},
									unix: {
										type: "number",
										example: 0,
									},
								},
							},
						},
					},
				},
			},
		},
	},
	"/v1/bot/invite": {
		get: {
			summary: "Returns the bot's invite link",
			operationId: "getInvite",
			tags: ["client"],
			responses: {
				200: {
					description: "Success",
					content: {
						"application/json": {
							schema: {
								type: "object",
								properties: {
									invite: {
										type: "string",
										example:
											"https://discord.com/oauth2/authorize?client_id=123456789&scope=bot&permissions=8",
									},
								},
							},
						},
					},
				},
			},
		},
	},
	"/v1/bot/presence": {
		put: {
			summary: "Sets the bot's presence",
			operationId: "setPresence",
			tags: ["client"],
			requestBody: {
				content: {
					"application/json": {
						schema: {
							type: "object",
							properties: {
								status: {
									type: "string",
									example: "online",
								},
								activityName: {
									type: "string",
									example: "Updated with Swagger!",
								},
								activityType: {
									type: "string",
									example: "PLAYING",
								},
								activityUrl: {
									type: "string",
									example: "https://twitch.tv/ILostMyMedic",
								},
							},
						},
					},
				},
			},
			responses: {
				200: {
					description: "Success",
					content: {
						"application/json": {
							schema: {
								type: "object",
								properties: {
									status: {
										type: "string",
										example: "online",
									},
									activityName: {
										type: "string",
										example: "Updated with Swagger!",
									},
									activityType: {
										type: "string",
										example: "PLAYING",
									},
									activityUrl: {
										type: "string",
										example: "https://twitch.tv/ILostMyMedic",
									},
								},
							},
						},
					},
				},
			},
		},
	},
};
