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
    bordingPoint: {
        type: String,
        required: true
    },
    dropingPoint: {
        type: String,
        required: true
    },
    bordingTime: {
        type: String,
        required: true
    },
    dropingTime: {
        type: String,
        required: true
    },
    fare: {
        type: Number || String,
        required: true
    }, 
    seatNumber: {
        type: String || Number,
        required: true
    },
    seatBerth: {
        type: String,
        required: true
    },

})

const Ticket = model('ticket', ticketSchema);

export default Ticket;