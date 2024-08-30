import Cloud from "../models/Cloud";
import { Request,Response } from "express";
export default class CloudController{
    public static async create(req:Request,res:Response){
        try {
            const {user,header,body,filename} = req.body;
            const cloud = new Cloud({
                user,
                header,
                body,
                fileName:filename
            });
            await cloud.save();
            res.status(201).json({msg:'Добавлен'});
        } catch (error) {
            res.status(500).json({error});
        }
    }
    public async getCloud(req:Request,res:Response){
        
    }
}