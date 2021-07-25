import { Schema, model } from 'mongoose';

enum seatStatus {
    vacant = 'vacant',
    booked = 'booked'
};

enum seatBerth {
    upper = 'upper',
    lower = 'lower'
}

enum seatType {
    sleeper = 'sleeper',
    sitting = 'sitting'
}

const seatTypeSchema = new Schema ({
    seatNumber: {
        type: String || Number,
        required: true
    },
    seatStatus: {
        type: String,
        enum: Object.values(seatStatus),
        default: 'vacant',
        required: true
    },
    seatBerth: {
        type: String,
        enum: Object.values(seatBerth),
        required: true
    },
    seatType: {
        type: String,
        enum: Object.values(seatType),
        required: true
    }
},
{
    timestamps: true,
    versionKey: false
});

const SeatType = model('seatType', seatTypeSchema);

export default SeatType;