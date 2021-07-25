export default interface IUser {
    _id?: string;
    firstName: string;
    lastName: string;
    password: string;
    phone: Number | string;
    email: string;
    companyName: string;
    role: string;
    isModified: boolean | any;
    checkPassword: any;
    tickets: string[];
}
