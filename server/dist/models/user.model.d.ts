/// <reference types="mongoose" />
import IUser from '../types/user.type';
declare const User: import("mongoose").Model<IUser, {}, {}>;
export default User;
