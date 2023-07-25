import dotenv from 'dotenv';
dotenv.config();
import { IConnection } from '../interfaces/database.interface';

const cert =
	process.env.NODE_ENV === "production"
		? "./src/certs/MongoDB_PROD_CERT.pem"
		: "./src/certs/MongoDB_DEV_CERT.pem";

export default {
	appName: process.env.APP_NAME || "text application",
	PORT: process.env.PORT || 7080,
	isProduction: process.env.NODE_ENV === "production",
	env: () => {
		return (
			process.env.NODE_ENV &&
			(process.env.NODE_ENV === "production"
				? "production"
				: process.env.NODE_ENV === "development"
				? "development"
				: "local")
		);
	},
	mongo: {
		uri: process.env.MONGO_URI || "mongodb://localhost:27017",
		options: {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			tlsCertificateKeyFile: cert
		}
	} as IConnection,
	jwt: {
		secret: process.env.JWT || "secret",
	},
	token: process.env.TOKEN || "token",
	platform: process.env.PLATFORM || "Discord",
};