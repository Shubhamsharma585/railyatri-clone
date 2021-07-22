import { Schema, model } from "mongoose";
import IBus from '../types/bus.types';

enum busType {
    ac = 'ac',
    luxory = 'luxory',
    sleeper = 'sleeper'
}

const busSchema = new Schema({
    companyName: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    price: {
        type: Schema.Types.ObjectId,
        ref: 'price',
        required: true
    },
    busType: {
        type: String,
        enum: Object.values(busType),
        required: true
    },
    startTime: {
        type: String,
        required: true   
    },
    endTime: {
        type: String,
        required: true
    },
    originCity: {
        type: String,
        required: true
    },
    destinationCity: {
        type: String,
        required: true
    },
    gallery: [
        {
            type: String
        }
    ]
},
{
    timestamps: true,
    versionKey: false
});

const Bus = model<IBus>('bus', busSchema);

export default Bus;