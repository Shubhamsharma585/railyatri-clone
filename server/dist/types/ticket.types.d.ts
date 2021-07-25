export default interface ITicket {
    _id?: string;
    passengerName: string;
    passengerAddress: string;
    boardingPoint: string;
    droppingPoint: string;
    bordingTime: string;
    fare: number | string;
    seat: string;
    ticketStatus: string;
}
