import logger from "./utils/logger";
import "./utils/processes";
import environment from "./utils/environment";
import Database from "./database";

// 
import Client from "./apps/client";
import Server from "./apps/express";

const start = async () => {
    try {
        await Database.getInstance(environment.mongo).connect();

        // start applications
        Client.getInstance().connect();
        Server.getInstance().connect();
    } catch (error) {
        logger.error(error);
        process.exit(1);
    }
};

start();