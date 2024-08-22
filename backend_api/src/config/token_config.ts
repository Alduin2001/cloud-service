import * as jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

async function verifyToken(token:string){
    try{
        const decoded = await jwt.verify(token,process.env.SECRET_KEY!);
        return decoded;
    }catch(error){
        return error;
    }
}

async function makeToken(payload:object){
    try {
        const token = await jwt.sign(payload,process.env.SECRET_KEY!,{expiresIn:'10h'});
        return token;
    } catch (error) {
        return error;
    }
}
export {verifyToken,makeToken};