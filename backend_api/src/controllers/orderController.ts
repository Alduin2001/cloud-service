import Order from "../models/Order";
import User from "../models/User";
import Tarif from "../models/Tarif";
import { Request, Response } from "express";
import mongoose from "mongoose";

export default class OrderController {
    public static async create(req: Request, res: Response) {
        try {
            const { user, tarif, description } = req.body;
            const order = new Order({
                user,
                tarif,
                description
            });
            await order.save();
            res.status(201).json({ msg: 'Тариф заказан' });
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    public static async getMyOrders(req: Request, res: Response) {
        try {
            const user = req.query.user;
            const myorders = await Order.find({user})
            .select('description')
            .populate({path:'user',select:'name surname patronymic'})
            .populate({path:'tarif',select:'name size price'}).lean();
            res.status(200).json({ myorders });
        } catch (error) {
            res.status(500).json({ error });
        }
    }
}