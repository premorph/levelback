import { Request, Response } from "express";
import {ManageEventContract} from "../interfaces/manageEvent.interface";
import {matchedData} from "express-validator";
import {ManageEventModel} from "../models/nosql/manageEvents.model";
import {httpResponses} from "../utils";

class ManageEventService implements ManageEventContract {
   async CreateManageEvent(req: Request, res: Response): Promise<void> {
        const body = matchedData(req,{locations:['body']})
        await ManageEventModel.create(body,(err:any,result:any)=>{
            if(err){
                return httpResponses(res,400,err.message.toString(),false)
            }
            if(result.length<0){
                return httpResponses(res,400,'NOT_RECORDS_FINDS',false)
            }
            return httpResponses(res,200,result,true)
        })
    }
    async UpdateManageEvent(req: Request, res: Response): Promise<void> {
        const body = matchedData(req,{locations:['body']})
        const _id= matchedData(req,{locations:['query']})
        await ManageEventModel.findByIdAndUpdate(_id,body,(err:any,result:any)=>{
            if(err){
                return httpResponses(res,400,err.message.toString(),false)
            }
            if(result.length<0){
                return httpResponses(res,400,'NOT_RECORDS_FINDS',false)
            }
            return httpResponses(res,200,result,true)
        })
    }
   async GetManageEvent(req: Request, res: Response): Promise<void> {
        const _id= matchedData(req,{locations:['query']})
        await ManageEventModel.findOne(_id,(err:any, result:any)=>{
            if(err){
                return httpResponses(res,400,err.message.toString(),false)
            }
            if(result.length<0){
                return httpResponses(res,400,'NOT_RECORDS_FINDS',false)
            }
            return httpResponses(res,200,result,true)
        })
    }
   async GetManageEvents(req: Request, res: Response): Promise<void> {
        await ManageEventModel.find((err:any, result:any)=>{
            if(err){
                return httpResponses(res,400,err.message.toString(),false)
            }
            if(result.length<0){
                return httpResponses(res,400,'NOT_RECORDS_FINDS',false)
            }
            return httpResponses(res,200,result,true)})

    }
    async DeleteManageEvents(req: Request, res: Response): Promise<void> {
        const _id= matchedData(req,{locations:['query']})
        await ManageEventModel.deleteOne(_id,(err:any, result:any)=>{
            if(err){
                return httpResponses(res,400,err.message.toString(),false)
            }
            if(result.length<0){
                return httpResponses(res,400,'NOT_RECORDS_FINDS',false)
            }
            return httpResponses(res,200,result,true)
        })
    }
    StatusManageEvents(req: Request, res: Response): void {
        throw new Error("Method not implemented.");
    }

}
export default ManageEventService