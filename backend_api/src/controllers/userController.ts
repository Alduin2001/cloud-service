import { Request,Response } from "express";
import User from "../models/User";
export default class UserController{
    public static async create(req:Request,res:Response){
        const {name} = req.body;
        const user = new User({
            name:name
        });
        await user.save();
        res.status(201).json({msg:'Пользователь создан'});
    }
    public static login(req:Request,res:Response){

    }
    public static read(req:Request,res:Response){
        
    }
    public static update(req:Request,res:Response){

    }
    public static delete(req:Request,res:Response){
        
    }
}