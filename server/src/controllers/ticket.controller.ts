import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();

import  SeatType from '../models/seatType.model';
import  Ticket from '../models/ticket.model';
import  User from '../models/user.model';

import ITicket from '../types/ticket.types';
import ISeatTypes from '../types/seatType.types';
import IUser from '../types/user.types';

import protect from '../middlewares/protect';
import authorize from '../middlewares/authorise';

// book seat

router.post('/:seatId/', protect, authorize(["user", "admin", "owner"]), async(req: Request | any, res: Response)=>{
    try {
        const seatId = req.params.seatId;

        const userId: string = req.user._id;

        const seat: ISeatTypes = await SeatType.findByIdAndUpdate(seatId, {
            seatStatus: 'booked'
        }, {new: true})

        let ticket: ITicket = await Ticket.create(req.body);

        let user: IUser | null = await User.findByIdAndUpdate(userId, {
            $push: {
                tickets: ticket._id
            }
        }, {new: true})

        res.status(201).json({
            status: 'success',
            seat,
            ticket,
            user
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