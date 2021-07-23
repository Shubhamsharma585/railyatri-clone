import { Schema, model } from "mongoose";

const ticketSchema = new Schema({

});

const Ticket = model('ticket', ticketSchema);

export default Ticket;