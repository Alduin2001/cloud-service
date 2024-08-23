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
    size:{
        type:Number,
        required:true
    },
    description:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
});

const Tarif = mongoose.model('Tarif',tarifSchema);

export default Tarif;