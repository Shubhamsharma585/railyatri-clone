export default interface IAdminOwner {
    _id?: string;
    firstName: string;
    lastName: string;
    password: string;
    phone: number;
    companyName?: string;
    email: string;
    role: string;
    isModified: any;
    checkPassword: any;
}
