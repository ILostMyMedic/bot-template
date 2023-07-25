import logger from "./utils/logger";
import "./utils/processes";
import environment from "./utils/environment";
import Database from "./database";


const start = async () => {
    try {
        await Database.getInstance(environment.mongo).connect();
    } catch (error) {
        logger.error(error);
        process.exit(1);
    }
};

start();