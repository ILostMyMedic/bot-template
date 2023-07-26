import { PresenceStatusData, ActivitiesOptions} from "discord.js";

export interface IUptime {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
	miliseconds: number;
	timestamp: string;
	unix: number;
}

export interface IPresence {
	status?: PresenceStatusData;
	activities?: ActivitiesOptions[];
}