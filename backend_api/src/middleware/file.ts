import multer from "multer";
import { Request } from "express";
import path from "path";
import { unlink } from "fs/promises";
const allowTypes = ['image/png','image/jpg','image/jpeg'];
const storage = multer.diskStorage({
    destination: (req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) => {
        cb(null, 'uploads/');
    },
    filename: (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage,
    fileFilter:(req,file,cb)=>{
        if(allowTypes.includes(file.mimetype)){
            cb(null,true);
        }else{
            cb(new Error('Invalid file type'), false);
        }
    }
 });

const deleteFile = async (filename:string)=>{
    await unlink(filename);
}

export {upload, deleteFile};