import { Request, Response } from "express";
import {Types} from "mongoose";

export interface IUser{
name:string;
lastname:string;
email:string;
password:string;
avatar:Types.ObjectId;
role:any
status:any
    _id?:Types.ObjectId

}
export interface UserContract {
    CreateUser(req:Request,res:Response):void
    GetUsers(req:Request,res:Response):void;
    GetUser(req:Request,res:Response):void;
    UpdateUser(req:Request,res:Response):void;
    DeleteUser(req:Request,res:Response):void

}

