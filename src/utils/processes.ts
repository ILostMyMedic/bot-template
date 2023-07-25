import logger from "./logger";

// check for unhandled rejections and uncaught exceptions
process.on('unhandledRejection', (reason, promise) => {
    logger.error(`Unhandled Rejection at: ${promise}, reason: ${reason}`);
    process.exit(1);
});

process.on('uncaughtException', (error) => {
    logger.error(`Uncaught Exception: ${error.message}`);
    process.exit(1);
});

// check for uncaught exceptions
process.on('uncaughtExceptionMonitor', (error, origin) => {
    logger.error(`Uncaught Exception: ${error.message} at ${origin}`);
    process.exit(1);
});

// check for warnings
process.on('warning', (warning) => {
    logger.warn(`Warning: ${warning.name}, ${warning.message}`);
});