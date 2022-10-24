import { model, Schema } from "mongoose";
import { IUser } from "../../interfaces";

<<<<<<< HEAD
const userSchema = new Schema<IUser>({
    name:{type:String, require:true},
    lastname:{type:String, require:true},
    email:{type:String, require:true},
    password:{type:String, require:true},
    role:{ type:['user','admin','restaurant'],default:'user'},
    status:{ type:['active','inactive','reported'],default:'active'}
})
export const UserModel =model<IUser>('user',userSchema)
=======
const userSchema =  new Schema<IUser>({
name:{ type:String,require:true},
lastname:{ type:String,require:true},
email:{ type:String, require:true, unique:true},
password:{type:String, require:true},
role:{ type:["admin","resturant","user"], default:"user"},
avatar:{ type:String},
},
{timestamps:true,
versionKey:false
})

export const UserModel = model<IUser>('user',userSchema)
>>>>>>> 8cba15b (fixed json)
