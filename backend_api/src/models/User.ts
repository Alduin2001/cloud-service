import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt';
import Tarif from "./Tarif";
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    surname:{
        type:String,
        required:true
    },
    patronymic:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    tarif:{
        type:Schema.Types.ObjectId,
        ref:'Tarif'
    },
    accessCloud:{
        type:Boolean,
        default:false
    },
    role:{
        type:String,
        default:'user'
    },
});

userSchema.pre('save',async function(next){
    const user = this;
    if(!user.isModified('password')){
        next();
    }
    const salt = await bcrypt.genSalt(5);
    user.password = await bcrypt.hash(user.password,salt);
});
const User = mongoose.model('User',userSchema);

export default User;