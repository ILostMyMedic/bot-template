import { createLogger, format, transports } from "winston";
import "winston-daily-rotate-file";
import environment from "./environment";


const logger = createLogger({
	level: "info",
	format: format.combine(
		format.colorize(),
		format.timestamp({
			format: "DD-MM-YYYY HH:mm:ss",
		}),
		format.errors({ stack: true }),
		format.splat(),
		format.json()
	),
	defaultMeta: { service: "prandpress" },
	transports: [
		//
		// - Write to all logs with level `info` and below to `app-combined.log`.
		// - Write all logs error (and below) to `quick-start-error.log`.
		//
		new transports.File({
			filename: "./logs/app-error.log",
			level: "error",
		}),
		new transports.File({
			filename: "./logs/app-combined.log",
		}),
		new transports.DailyRotateFile({
			filename: "./logs/app-combined-%DATE%.log",
			datePattern: "YYYY-MM-DD",
			maxSize: "1m",
		}),
	],
});

//
// If we're not in production then **ALSO** log to the `console`
// with the colorized simple format.
//
if (!environment.isProduction) {
    logger.add(new transports.Console({
        format: format.combine(
            format.colorize(),
            format.simple()
        )
    }));
}

export default logger;