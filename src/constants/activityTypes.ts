import { ActivityType } from "discord.js";

type ActivityTypeName =
	| "PLAYING"
	| "STREAMING"
	| "LISTENING"
	| "WATCHING"
	| "CUSTOM_STATUS"
	| "COMPETING";

type ActivityTypeMap = Record<ActivityTypeName, number>;

export const activityTypes: ActivityTypeMap = {
	PLAYING: ActivityType.Playing,
	STREAMING: ActivityType.Streaming,
	LISTENING: ActivityType.Listening,
	WATCHING: ActivityType.Watching,
	CUSTOM_STATUS: ActivityType.Custom,
	COMPETING: ActivityType.Competing,
};

// const activityType: number = activityTypes.PLAYING;
// console.log(activityType); // Output: 0
