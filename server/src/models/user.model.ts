import { Schema, model } from 'mongoose';

import IUser from '../types/user.type';

enum roles {
    admin = "admin",
    owner = "owner",
    user = "user"
}

const userSchema = new Schema ({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    phone: {
        type: Number || String,
        maxLength: 10,
        minLength: 10
    },
    email: {
        type: String,
    },
    companyName: {
        type: String,
        default: 'NA'
    },
    role: {
        type: roles
    }
},
{
    timestamps: true,
    versionKey: false
});

const User = model<IUser>('user', userSchema);

export default = User;