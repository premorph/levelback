import { Request, Response } from 'express';
import { Types } from 'mongoose';
export interface IStorage{
    filename:string;
    fileOwner:Types.ObjectId;
    typeF:string;
}
export interface IStoragecontract{
    CreateStorage(req:Request,res:Response):void;
    GetStorages(req:Request,res:Response):void;
    GetStorage(req:Request,res:Response):void;
    DeleteStorage(req:Request,res:Response):void;
    UpdateStorage(req:Request,res:Response):void;
}
