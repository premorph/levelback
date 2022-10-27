import { Request, Response } from 'express';
import { matchedData } from 'express-validator';
import { CallbackError } from 'mongoose';
import { IReserveContract, IReserve } from '../interfaces/reserve.interface';
import { ReserveModel } from '../models/nosql/reserve.model';
import { httpResponses } from '../utils/http.utils';
import {IStorage} from "../interfaces";
class ReserveService implements IReserveContract{
    createReserve(req: Request, res: Response): void {
        const body =matchedData(req.body)
            ReserveModel.create({body},(err,result)=>{
                if(err){
                    res.send({ok:false,
                    err})
                }
            res.send({
                ok:true,
                result
            }) 
        });
    }
    async chargeReservePayMedia(data:IStorage,res:Response):Promise<void>{
        const value:IReserve = {
        _id:data.fileOwner,
            imagePay:data._id
        }
        await ReserveModel.updateOne(value._id,{imagePay:value.imagePay},(err:any,result:any)=>{
            if(err){
                return httpResponses(res,400,err.message.toString(),false)
            }
            return httpResponses(res,200,result,true)

        })
    }
    GetReserves(_req: Request, res: Response):void{
        try {
            const reserves =  ReserveModel.find()
        if(!reserves){
            res.status(400).json({
                ok:false,
                message:{err:"not records"}
            })
        }
        res.send(reserves)

        } catch (error) {
            res.send(error)
        }
    }
    GetReserve(req: Request, res: Response): void {
        try {
            const {_id} = req.params
            ReserveModel.findById({_id},(err:CallbackError,result:IReserve)=>{
                if(err){
                    httpResponses(res,400,"not records find",false)
                }
                    res.status(200).json({
                        ok:true,
                        data:result
                    })
            })
        } catch (error) {
            httpResponses(res,400,"Something went wrong",false)
        }
    }
    DeleteReserve(req: Request, res: Response): void {
        try {
            const {_id} = req.params;
            ReserveModel.findOneAndDelete({_id},(err:CallbackError,result:IReserve)=>{
                if(err){
                    httpResponses(res,400,"not records find",false)
                }
                    res.status(200).json({
                        ok:true,
                        data:result
                    })
            })
        } catch (error) {
            httpResponses(res,400,"Something went wrong",false)
        }
    }
    UpdateReserve(req: Request, res: Response): void {
        try {
            const {_id} = req.params
            const body =matchedData(req.body)
            ReserveModel.findOneAndUpdate({_id:_id, body},(err:CallbackError,result:IReserve)=>{
                if(err){
                    httpResponses(res,400,"not records find",false)
                }
                    res.status(200).json({
                        ok:true,
                        data:result
                    })
            })
        } catch (error) {
            httpResponses(res,400,"Something went wrong",false)
            
        }
    }
    
}
export {ReserveService}
