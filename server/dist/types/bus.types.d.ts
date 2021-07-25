import IPrice from "./price.types";
interface ISeatTypeId {
    totalSeats: number;
    seatsBooked: number;
    seatTypeId: string[];
}
export default interface IBus {
    companyNameId: string;
    busType: string;
    priceId: IPrice;
    startTime: string;
    endTime: string;
    originCity: string;
    destinationCity: string;
    gallery: string[];
    seats: ISeatTypeId;
}
export {};
