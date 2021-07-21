import IPrice from "./price.types";

enum busType {
    ac,
    luxory,
    sleeper
}

export default interface IBus {
    companyName: string;
    bustype: busType,
    price: IPrice,
    startTime: string;
    endTime: string;
    originCity: string;
    destinationCity: string;
    gallery: string[]
}