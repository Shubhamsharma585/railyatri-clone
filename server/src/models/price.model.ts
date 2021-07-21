import { Schema, model } from 'mongoose';
import IPrice from '../types/Price.types';

const priceSchema = new Schema({
    sleeper: Number,
    luxory: Number,
    ac: Number,
});

const Price  = model<IPrice>('price', priceSchema);

export default Price;