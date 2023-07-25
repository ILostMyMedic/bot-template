import mongoose from 'mongoose';
import { IConnection } from '../interfaces/database.interface';
import logger from '../utils/logger';


export default class Database {
    private static instance: Database;
    private connection: IConnection;

    private constructor(connection: IConnection) {
        this.connection = connection;
    }

    public static getInstance(connection: IConnection): Database {
        if (!Database.instance) {
            Database.instance = new Database(connection);
        }

        return Database.instance;
    }

    public async connect(): Promise<void> {
        try {
            await mongoose.connect(this.connection.uri, this.connection.options);
            logger.info('Database connected');
        } catch (error) {
            logger.error(error);
            process.exit(1);
        }
    }
}