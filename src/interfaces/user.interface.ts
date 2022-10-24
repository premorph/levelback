import { Request, Response } from "express";

export interface IUser{
name:string;
lastname:string;
email:string;
password:string;
avatar:string;
role:any
<<<<<<< HEAD
status:any
=======
>>>>>>> 8cba15b (fixed json)
}
export interface UserContract {
    CreateUser(req:Request,res:Response):void
    GetUsers(req:Request,res:Response):void;
    GetUser(req:Request,res:Response):void;
    UpdateUser(req:Request,res:Response):void;
    DeleteUser(req:Request,res:Response):void
<<<<<<< HEAD
}
=======
}
>>>>>>> 8cba15b (fixed json)
