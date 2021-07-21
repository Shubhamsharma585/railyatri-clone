enum busType {
    ac,
    luxory,
    sleeper
}

export default interface IBus {
    companyName: string;
    bustype: busType,
    price: Number[],
    startTime: string;
    endTime: string;
    originCity: string;
    destinationCity: string;
    gallery: string[]
}