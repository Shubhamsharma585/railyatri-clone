/// <reference types="mongoose" />
import IUser from '../types/user.types';
declare const User: import("mongoose").Model<IUser, {}, {}>;
export default User;
