import { Request, Response } from "express";
import Tarif from "../models/Tarif";

export default class TarifController{
    public static async create(req:Request,res:Response){
        try {
            const {name,price,size,description} = req.body;
            const tarif = new Tarif({
                name,
                price,
                size,
                description
            });
            await tarif.save();
            res.status(201).json({msg:'Тариф добавлен'});
        } catch (error) {
            console.log(error);
        }
    }
    public static async read(req: Request, res: Response) {
        try {
            const page = parseInt(req.query.page as string, 10) || 1;
            const limit = parseInt(req.query.limit as string, 10) || 10;
            const skip = (page - 1) * limit;
            const countTarif = await Tarif.countDocuments();
            const tarifs = await Tarif.find({}).skip(skip).limit(limit).lean();
            res.status(200).json({ tarifs:tarifs,page:page,pages:Math.ceil(countTarif/limit)});
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: 'Ошибка сервера' });
        }
    }

    public static async update(req:Request,res:Response){
        try {
            const id = req.params.id;
            const {name,price,size,description} = req.body;
            const updated = await Tarif.findByIdAndUpdate(id,{
                name,
                price,
                size,
                description
            });
            res.status(200).json({msg:'Успешно обновлён'});
        } catch (error) {
            res.status(500).json({error});
        }
    }
    public static async delete(req:Request,res:Response){
        try {
            const id = req.params.id;
            const tarif = await Tarif.findByIdAndDelete(id);
            res.status(200).json({msg:'Удалено'});
        } catch (error) {
            res.status(500).json({error});
        }
    }
}