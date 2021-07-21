import { Schema, model } from 'mongoose';
import IPrice from '../types/price.types'

const priceSchema = new Schema({
    sleeper: Number,
    luxory: Number,
    ac: Number,
},
{
    timestamps: true,
    versionKey: false
});

const Price  = model<IPrice>('price', priceSchema);

export default Price;