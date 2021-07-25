import express, { Request, Response } from 'express';

import Bus from '../models/bus.model';
import Price from '../models/price.model';
import SeatType from '../models/seatType.model';
import Ticket from '../models/ticket.model';
import IBus from '../types/bus.types';
import IPrice from '../types/price.types';
import ISeatTypes from '../types/seatType.types';
import protect from '../middlewares/protect';
import authorize from '../middlewares/authorise';
import IUser from '../types/user.types';

const router = express();

// get all buses details

router.get('/', async(req: Request | any, res: Response)=>{
    try {
        const page = +req.query.page | 1;
        const limit = +req.query.limit | 10;

        const offset = (page - 1) * limit;

        const buses: IBus[] = await Bus.find()
                                        .populate({path: 'companyNameId', select: 'companyName'})
                                        .populate('priceId')
                                        .populate({path: 'seats', populate: 'seatTypeId'})
                                        .skip(offset)
                                        .limit(limit)
                                        .lean()
                                        .exec();

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

// get single bus detail

router.get('/:id', async(req, res)=>{
    try {
        const id: string = req.params.id;

        const bus: IBus | null = await Bus.findById(id)
                                .populate({path: 'companyNameId', select: 'companyName'})
                                .populate('priceId')
                                .populate({path: 'seats', populate: 'seatTypeId'})
                                .lean()
                                .exec();
        res.status(200).json({
            status: 'success',
            bus
        });
    }
    catch (err) {
        res.status(400).json({
            status: 'failure',
            message: err.message
        });
    }
});

// add new bus detail

router.post('/', protect, authorize(["admin", "owner"]), async(req: Request | any, res: Response)=>{
    try {
        const user: IUser = req?.user;
        
        const inpPrice: IPrice = req.body.price;
        let seats = req.body.seats;

        let seatType: ISeatTypes[] = seats.seatTypeId;

        let seatTypeId = await SeatType.create(seatType);
        seatTypeId = seatTypeId.map(item=> item._id)

        seats = {...seats, seatTypeId};

        const price: IPrice = await Price.create(inpPrice);

        const busDetail: IBus = await Bus.create({...req.body, companyNameId: user._id, priceId: price._id, seats});

        res.status(201).json({
            status: 'success',
            bus: busDetail
        })
    }
    catch (err) {
        res.status(400).json({
            status: 'failure',
            message: err.message,
            err
        });
    }
});

// edit bus details except price and seat 

router.patch('/:id', protect, authorize(["admin", "owner"]), async(req: Request, res: Response)=>{
    try {
        const id: string = req.params.id;
        
        const updatedBusDetails = await Bus.findByIdAndUpdate(id, {...req.body}, {new: true});

        res.status(201).json({
            status: 'success',
            bus: updatedBusDetails
        });
    }
    catch (err) {
        res.status(400).json({
            status: 'failure',
            message: err.message
        });
    }
})

// edit price

router.patch('/:id/price', protect, authorize(["admin", "owner"]), async(req: Request, res: Response)=>{
    try {
        const id: string = req.params.id;

        const busDetail: IBus | null = await Bus.findById(id).lean().exec();

        const updatedPrice = await Price.findByIdAndUpdate(busDetail?.priceId, ...req.body, {new: true})

        res.status(201).json({
            status: 'success',
            price: updatedPrice
        });
    }
    catch (err) {
        res.status(400).json({
            status: 'failure',
            message: err.message
        });
    }
});

//edit seatType

router.patch('/:seatNum/seat', protect, authorize(["admin", "owner"]), async(req: Request, res: Response)=>{

});

router.delete('/:id', protect, authorize(["admin", "owner"]), async(req: Request, res: Response)=>{
    try {
        const id: string = req.params.id;

        const busDetail: IBus | null = await Bus.findById(id).lean().exec();

        await Price.findByIdAndDelete(busDetail?.priceId);

        let seatTypeId = busDetail?.seats?.seatTypeId;

        seatTypeId?.map(async (item: String)=> await SeatType.findByIdAndDelete(item));

        await Bus.findByIdAndDelete(id);

        res.status(200).json({
            status: 'success',
            message: 'deleted successfully'
        });
    }
    catch (err) {
        res.status(400).json({
            status: 'failure',
            message: err.message
        });
    }
})

export default router;