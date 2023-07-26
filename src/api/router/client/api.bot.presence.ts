import { Request, Response } from "express";
import StatusCodes from "../../../constants/statusCodes";
import { Client, PresenceStatusData, ActivitiesOptions } from "discord.js";
import {
	activityTypes,
	ActivityTypeName,
} from "../../../constants/activityTypes";
import { IPresence } from "../../../interfaces/client.interface";



export default async (req: Request, res: Response) => {
	try {
		const { status, activityName, activityType, activityUrl } = req.body;

		const presence: IPresence = {};

		if (status) {
			presence.status = status as PresenceStatusData;
		}

		// from activityType types number
		const activityTypeNumber: number =
			activityTypes[activityType as ActivityTypeName];

		if (activityName && activityType) {
			presence.activities = [
				{
					name: activityName as string,
					type: 0,
					url: activityUrl as string,
				},
			];
		}

		if (!presence.status && !presence.activities) {
			throw new Error("No presence data provided");
		}
		if (
			presence.status &&
			!["online", "idle", "dnd", "invisible"].includes(presence.status)
		) {
			throw new Error("Invalid presence status");
		}

		const client: Client = req.body.client;

		await client.user?.setPresence(presence);

		await logPresence(req, presence);

		res.status(StatusCodes.OK).send(presence);
	} catch (err: any) {
		res.status(StatusCodes.BadRequest).send(err.message);
	}
};

const logPresence = async (req: Request, presence: IPresence) => {
	
};
