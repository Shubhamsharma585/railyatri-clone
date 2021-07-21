declare enum busType {
    ac = 0,
    luxory = 1,
    sleeper = 2
}
export default interface IBus {
    companyName: string;
    bustype: busType;
    price: Number[];
    startTime: string;
    endTime: string;
    originCity: string;
    destinationCity: string;
    gallery: string[];
}
export {};
