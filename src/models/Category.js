'use strict'

import {Schema} from 'mongoose';
import ModelConstructor from '../utils/classes/ModelConstructor';

const categorySchema = new ModelConstructor('Category', {
	title: {
		type: String,
		required: true,
	},
	color: {
		type: String,
		default: '#000000',
	},
	description: {
		type: String,
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
});

export default categorySchema.init();
