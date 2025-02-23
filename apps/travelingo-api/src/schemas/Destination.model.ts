import { Schema } from 'mongoose';
import { DestinationLocation, DestinationStatus, DestinationType } from '../libs/enums/destination.enum';

const DestinationSchema = new Schema(
	{
		destinationType: {
			type: String,
			enum: DestinationType,
			required: true,
		},

		destinationStatus: {
			type: String,
			enum: DestinationStatus,
			default: DestinationStatus.ACTIVE,
		},

		destinationLocation: {
			type: String,
			enum: DestinationLocation,
			required: true,
		},

		destinationAddress: {
			type: String,
			required: true,
		},

		destinationTitle: {
			type: String,
			required: true,
		},

		destinationPrice: {
			type: Number,
			required: true,
		},


		destinationBeds: {
			type: Number,
			required: true,
		},

		destinationRooms: {
			type: Number,
			required: true,
		},

		destinationViews: {
			type: Number,
			default: 0,
		},

		destinationLikes: {
			type: Number,
			default: 0,
		},

		destinationComments: {
			type: Number,
			default: 0,
		},

		destinationRank: {
			type: Number,
			default: 0,
		},

		destinationImages: {
			type: [String],
			required: true,
		},

		destinationDesc: {
			type: String,
		},


		memberId: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'Member',
		},

		bookedAt: {
			type: Date,
		},

		deletedAt: {
			type: Date,
		},

		constructedAt: {
			type: Date,
		},
	},
	{ timestamps: true, collection: 'destinations' },
);

DestinationSchema.index({ destinationType: 1, destinationLocation: 1, propertyTitle: 1, propertyPrice: 1 }, { unique: true });

export default DestinationSchema;
