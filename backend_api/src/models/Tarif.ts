import mongoose from "mongoose";

const tarifSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
});

const Tarif = mongoose.model('Order',tarifSchema);

export default Tarif;