import { ISchema } from '../interfaces/database.interface';

export const schemaOptions: ISchema = {
	minimize: false,
	timestamps: true,
	toObject: {
		virtuals: true,
	},
	versionKey: "__v",
	strict: true,
	validateBeforeSave: true,
	default: {
		deleted: false,
	},
} as ISchema;