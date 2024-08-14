import mongoose from "mongoose";
import dotenv from 'dotenv';

async function connectionDB(url:string){
    await mongoose.connect(url)
    .then(()=>console.log('Connected'))
    .catch((err)=>{
        console.log('Disconnect');
        mongoose.disconnect();
    });
}

export default connectionDB;
