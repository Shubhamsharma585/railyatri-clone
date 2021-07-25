import IPrice from "./price.types";

enum busType {
    ac,
    luxory,
    sleeper
}

interface ISeatTypeId {
    totalSeats: number;
    seatsBooked: number;
    seatTypeId: string[];
}

export default interface IBus {
    companyNameId: string;
    bustype: busType,
    priceId: IPrice,
    startTime: string;
    endTime: string;
    originCity: string;
    destinationCity: string;
    gallery: string[]
    seats: ISeatTypeId;
}