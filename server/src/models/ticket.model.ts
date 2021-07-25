import {Schema, model} from "mongoose";

const ticketSchema = new Schema ({
    passengerName: {
        type: String,
        required: true
    },
    passengerAddress: {
        type: String,
        required: true
    },
    boardingPoint: {
        type: String,
        required: true
    },
    droppingPoint: {
        type: String,
        required: true
    },
    boardingTime: {
        type: String,
        required: true
    },
    fare: {
        type: Number || String,
        required: true
    },
    seat: {
        type: Schema.Types.ObjectId,
        ref: 'seatType',
        required: true
    },
    ticketStatus: {
        type: String,
        enum: ["booked", "cancelled"],
        default: 'booked'
    }
})

const Ticket = model('ticket', ticketSchema);

export default Ticket;