export const ClientPresence = {
	get: {
		tags: ["Client"],
		description: "Update client presence",
		operationId: "presence",
		// parameters: [
		//     {
		//         name: "id",
		//         in: "path",
		//         schema: {
		//             $ref: "./docs/components/schemas/id",
		//         },
		//         required: true,
		//         description: "A single todo id",
		//     },
		// ],
		responses: {
			"200": {
				description: "Todo is obtained",
				content: {
					"application/json": {
						schema: {
							$ref: "./docs/components/schemas/Todo",
						},
					},
				},
			},
			"404": {
				description: "Todo is not found",
				content: {
					"application/json": {
						schema: {
							$ref: "./docs/components/schemas/Error",
							example: {
								message: "We can't find the todo",
								internal_code: "Invalid id",
							},
						},
					},
				},
			},
		},
	},
};
