import mongoose from "mongoose";
import Tarif from "./Tarif";
import User from "./User";
const orderSchema = new mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    },
    tarif:{
        type:mongoose.Types.ObjectId,
        ref:'Tarif'
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:'На рассмотрении'
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    isAllowed:{
        type:Boolean,
        default:false
    }
});

const Order = mongoose.model('Order',orderSchema);

export default Order;