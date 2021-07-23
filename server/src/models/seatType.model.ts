import { Schema, model } from 'mongoose';

enum seatStatus {
    vacant = 'vacant',
    booked = 'booked'
};

enum seatBerth {
    upper = 'upper',
    lower = 'lower'
}

const seatTypeSchema = new Schema ({
    seatNumber: {
        type: Number || String,
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
    }
});

const SeatType = model('seatType', seatTypeSchema);

export default SeatType;