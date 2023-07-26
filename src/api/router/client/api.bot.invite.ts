import { Request, Response } from "express";
import { Client, OAuth2Scopes } from "discord.js";
import { DiscordPermissions } from "../../../constants/permissions";
import StatusCodes from "../../../constants/statusCodes";

export default function (req: Request, res: Response) {
	try {
		const client: Client = req.body.client;

		const invite = client.generateInvite({
			permissions: [DiscordPermissions["ADMINISTRATOR"]],
			scopes: [OAuth2Scopes.Bot],
		});

		res.status(StatusCodes.OK).send({
			invite,
		});
	} catch (err: any) {
		res.status(StatusCodes.BadRequest).send(err.message);
	}
}
