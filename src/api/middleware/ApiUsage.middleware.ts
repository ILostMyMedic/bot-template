import { Request, Response, NextFunction } from "express";
import StatusCodes from "../../constants/statusCodes";
import environment from "../../utils/environment";

export default function (req: Request, res: Response, next: NextFunction) {
    if (req.path.includes("/docs")) return next();

    // No API Key provided
    // if (!req.headers.authorization)
        // return res.status(StatusCodes.Unauthorized).send("Unauthorized");

    if (environment.isProduction) {
		// Get API Key from Database
		next();
	} else {
        // environment.ApiKey !== req.headers.authorization && res.status(StatusCodes.Unauthorized).send("Unauthorized");
        next();
    }
}