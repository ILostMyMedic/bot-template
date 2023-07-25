// express app class
import express, { Request, Response} from "express";
import swaggerUI from "swagger-ui-express";
import Docs from "../api/docs";
import logger from "../utils/logger";
import environment from "../utils/environment";
import StatusCodes from "../constants/statusCodes";

import { router } from "../api/router";

export default class Server {
    private static instance: Server;
    private app: express.Application;
    private port: number | string;

    private constructor() {
        this.app = express();
        this.port = environment.PORT;
    }

    public static getInstance(): Server {
        if (!Server.instance) {
            Server.instance = new Server();
        }

        return Server.instance;
    }

    public connect(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use("/api", router);
        if(!environment.isProduction) {
            this.app.use("/docs", swaggerUI.serve, swaggerUI.setup(Docs));
        }

        
        this.app.use(this.errorHandler);

        this.app.listen(this.port, () => {
            logger.info(`Server listening on port ${this.port}`);
        });
    }

    private errorHandler(error: Error, req: Request, res: Response): void {
        logger.error(error);

        res.status(StatusCodes.InternalServerError).send({
            message: error.message,
        });
    }
}