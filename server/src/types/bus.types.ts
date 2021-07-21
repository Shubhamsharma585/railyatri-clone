enum busType {
    ac,
    luxory,
    sleeper
}

export default interface IBus {
    companyName: string;
    bustype: busType,
    startTime: string;
    endTime: string;
    originCity: string;
    destinationCity: string;
    gallery: string[]
}