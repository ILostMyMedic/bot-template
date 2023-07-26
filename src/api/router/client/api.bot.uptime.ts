import { Request, Response } from "express";
import { Client } from "discord.js";
import StatusCodes from "../../../constants/statusCodes";
import { IUptime } from "../../../interfaces/client.interface";

export default async (req: Request, res: Response) => {
	const client: Client = req.body.client;

	try {
		const clientUptime = client.uptime;

		if (!clientUptime) {
			throw new Error("Uptime is not defined");
		}

		const uptimeFormatted: IUptime = {
			days: Math.floor(clientUptime / 86400000),
			hours: Math.floor((clientUptime / 3600000) % 24),
			minutes: Math.floor((clientUptime / 60000) % 60),
			seconds: Math.floor((clientUptime / 1000) % 60),
			miliseconds: clientUptime,
			timestamp: new Date(clientUptime).toISOString().slice(11, 19),
			unix: new Date().getTime() - clientUptime,
		};

		// check if uptimeFormatted is correct
		if (!uptimeFormatted) {
			throw new Error("Something went wrong");
		}

		res.status(StatusCodes.OK).send(uptimeFormatted);
	} catch (err: any) {
		res.status(StatusCodes.BadRequest).send(err.message);
	}
};
