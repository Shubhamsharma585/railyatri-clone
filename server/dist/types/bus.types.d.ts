import IPrice from "./price.types";
declare enum busType {
    ac = 0,
    luxory = 1,
    sleeper = 2
}
interface ISeatTypeId {
    totalSeats: number;
    seatsBooked: number;
    seatTypeId: string[];
}
export default interface IBus {
    companyNameId: string;
    bustype: busType;
    priceId: IPrice;
    startTime: string;
    endTime: string;
    originCity: string;
    destinationCity: string;
    gallery: string[];
    seats: ISeatTypeId;
}
export {};
