import { Schema, model } from 'mongoose';

const personSchema = new Schema({
	firstName: {
		type: Schema.Types.String,
		required: true
	},
	lastName: Schema.Types.String,
	fn: Schema.Types.Number,
	registeredOn: {
		type: Schema.Types.Date,
		default: Date.now
	}
});

export const PersonModel = model('Person', personSchema);