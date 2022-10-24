import { Request, Response } from "express";

export interface IUser{
name:string;
lastname:string;
email:string;
password:string;
avatar:string;
role:any
status:any
}
export interface UserContract {
    CreateUser(req:Request,res:Response):void
    GetUsers(req:Request,res:Response):void;
    GetUser(req:Request,res:Response):void;
    UpdateUser(req:Request,res:Response):void;
    DeleteUser(req:Request,res:Response):void
}
