import mongoose from "mongoose";

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
    isVeryfied:{
        type:Boolean,
        default:false
    },
    veryficationToken:{
        type:String
    }
});

userSchema.pre('save',function(next){
    const user = this;
    if(!user.isModified('password')){
        next();
    }
});
const User = mongoose.model('User',userSchema);

export default User;