import express, { Request, Response } from 'express';

import Bus from '../models/bus.model';
import Price from '../models/price.model';
import IBus from '../types/bus.types';
import IPrice from '../types/price.types';

const router = express();

router.get('/', async(req: Request | any, res: Response)=>{
    try {
        const page = +req.query.page | 1;
        const limit = +req.query.limit | 10;

        const offset = (page - 1) * limit;

        const buses = await Bus.find().populate('price').skip(offset).limit(limit).lean().exec();

        res.status(200).json({
            status: 'success',
            buses
        });
    }
    catch (err) {
        res.status(400).json({
            status: 'failure',
            message: err.message
        });
    }
});

router.post('/', async(req: Request, res: Response)=>{
    try {
        const inpPrice: IPrice = req.body.price;

        const price: IPrice = await Price.create(inpPrice);

        const busDetail = await Bus.create({...req.body, price: price._id});

        res.status(201).json({
            status: 'success',
            bus: busDetail
        })
    }
    catch (err) {
        res.status(400).json({
            status: 'failure',
            message: err.message
        });
    }
});

export default router;