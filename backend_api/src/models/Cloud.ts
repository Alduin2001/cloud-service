import mongoose, { Schema } from "mongoose";
import User from "./User";
const cloudSchema = new mongoose.Schema({
    header:{
        type:String
    },
    body:{
        type:String
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    fileName:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
});

const Cloud = mongoose.model('Cloud',cloudSchema);
export default Cloud;