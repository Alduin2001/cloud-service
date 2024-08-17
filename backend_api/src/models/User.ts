import mongoose from "mongoose";
import bcrypt from 'bcrypt';
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