import { Request,Response } from "express";
import User from "../models/User";
import { makeToken } from "../config/token_config";
import bcrypt from 'bcrypt';
export default class UserController{
    public static async create(req:Request,res:Response){
        try{
            const {name,surname,patronymic,email,password} = req.body;
        const user = new User({
            name:name,
            surname:surname,
            password:password,
            patronymic:patronymic,
            email:email
        });
        await user.save();
        res.status(201).json({msg:'Пользователь создан'});
        }catch(err){
            res.status(500).json({err});
        }
    }
    public static async login(req:Request,res:Response){
        try {
            const {email,password} = req.body;
            const finded = await User.findOne({email});
            if(!finded){
                return res.status(404).json({msg:'Пользователь не найден'});
            }
            const findByPassword = await bcrypt.compare(password,finded.password);
            if(!findByPassword){
                return res.status(404).json({msg:'Пользователь не найден'});
            }
            const payload = {
                _id:finded._id,
                name:finded.name,
                surname:finded.surname,
                patronymic:finded.patronymic,
                email:finded.email,
                role:finded.role
            };
            const token = await makeToken(payload);
            return res.status(200).json({token});
        } catch (error) {
            console.log(error);
        }
    }
    public static read(req:Request,res:Response){
        
    }
    public static update(req:Request,res:Response){

    }
    public static delete(req:Request,res:Response){
        
    }
}