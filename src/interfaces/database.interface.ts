import { ConnectOptions, SchemaOptions } from "mongoose";

export interface IConnection extends ConnectOptions {
    uri: string;
    options: ConnectOptions;
}

export interface ISchema extends SchemaOptions {
	minimize: boolean;
	timestamps: boolean;
	toObject: {
		virtuals: boolean;
	};
	versionKey: string;
	strict: boolean;
	validateBeforeSave: boolean;
	default: {
		deleted: boolean;
	};
}