// discordJS v14 client class
import { Client, Partials, GatewayIntentBits, Collection } from "discord.js";
import logger from "../utils/logger";
import environment from "../utils/environment";

export default class DiscordClient {
    private static instance: DiscordClient;
    private client: Client;

    private constructor() {
        this.client = new Client({
			intents: [
				GatewayIntentBits.DirectMessageReactions,
				GatewayIntentBits.DirectMessageTyping,
				GatewayIntentBits.DirectMessages,
				GatewayIntentBits.GuildEmojisAndStickers,
				GatewayIntentBits.GuildIntegrations,
				GatewayIntentBits.GuildInvites,
				GatewayIntentBits.GuildMembers,
				GatewayIntentBits.GuildMessageReactions,
				GatewayIntentBits.GuildMessageTyping,
				GatewayIntentBits.GuildMessages,
				GatewayIntentBits.GuildPresences,
				GatewayIntentBits.GuildScheduledEvents,
				GatewayIntentBits.GuildVoiceStates,
				GatewayIntentBits.GuildWebhooks,
				GatewayIntentBits.Guilds,
				GatewayIntentBits.MessageContent,
			],
			partials: [
				Partials.Channel,
				Partials.GuildMember,
				Partials.GuildScheduledEvent,
				Partials.Message,
				Partials.Reaction,
				Partials.ThreadMember,
				Partials.User,
			],
			shards: "auto",
		});
    }

    public static getInstance(): DiscordClient {
        if (!DiscordClient.instance) {
            DiscordClient.instance = new DiscordClient();
        }

        return DiscordClient.instance;
    }

    public async connect(): Promise<void> {
        try {
            await this.client.login(environment.token);
            logger.info("Discord client connected");
        } catch (error) {
            logger.error(error);
            process.exit(1);
        }
    }

    public getClient(): Client {
        return this.client;
    }
}