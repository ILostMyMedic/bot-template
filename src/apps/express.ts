// express app class
import express, { NextFunction, Request, Response} from "express";
import { Client } from "discord.js";
import swaggerUI from "swagger-ui-express";
import Docs from "../api/docs";
import logger from "../utils/logger";
import environment from "../utils/environment";
import StatusCodes from "../constants/statusCodes";

import ApiUsageMiddleware from "../api/middleware/ApiUsage.middleware";
import { router } from "../api/router";

export default class Server {
    private static instance: Server;
    private app: express.Application;
    private port: number | string;
    private client: Client;

    private constructor(client: Client) {
        this.app = express();
        this.port = environment.PORT;
        this.client = client;
    }

    public static getInstance(client: Client): Server {
        if (!Server.instance) {
            Server.instance = new Server(client);
        }

        return Server.instance;
    }

    public connect(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        // pass client
        this.app.use((req: Request, res: Response, next) => {
            req.body.client = this.client;
            next();
        });
        // middleware
        this.app.use(ApiUsageMiddleware);

        this.app.use("/api/v1", router);
        
        if(!environment.isProduction) {
            this.app.use("/docs", swaggerUI.serve, swaggerUI.setup(Docs));
        }

        
        this.app.use(this.errorHandler);

        this.app.listen(this.port, () => {
            logger.info(`Server listening on port ${this.port}`);
        });
    }

    private errorHandler(error: any, req: Request, res: Response, next: NextFunction) {
        logger.error(error);

        res.status(StatusCodes.InternalServerError).send({
            message: error.message,
        });
    }
}