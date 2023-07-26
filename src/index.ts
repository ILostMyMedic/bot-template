import dotenv from "dotenv";
dotenv.config();
import logger from "./utils/logger";
import "./utils/processes";
import environment from "./utils/environment";
import Database from "./database";

//
import Client from "./apps/client";
import Server from "./apps/express";

const requiredEnvs = ["NODE_ENV", "TOKEN", "PORT", "MONGO_URI"];
const validateEnv = (envs: string[]): void => {
	let missingEnvs: boolean = false;

	requiredEnvs.forEach((variable) => {
		if (!envs.includes(variable)) {
			missingEnvs = true;
			logger.error(`Missing environment variable: ${variable}`);
		} else {
			const value = process.env[variable];
			logger.info(`✅ ${variable}`);
		}
	});

	if (missingEnvs) {
		logger.error("Script stopped due to missing environment variables.");
		process.exit(1);
	}
};

const start = async () => {
	try {
		// validate environment variables
		const envVariables = process.env;
		validateEnv(Object.keys(envVariables));

		// connect to database
		await Database.getInstance(environment.mongo).connect();

		// start applications
		Client.getInstance().connect();
		const client = Client.getInstance().getClient();

		Server.getInstance(client).connect();
	} catch (error) {
		logger.error(error);
		process.exit(1);
	}
};

start();
