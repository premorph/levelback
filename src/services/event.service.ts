import { Request, Response } from 'express'
import { matchedData } from 'express-validator'
import { CallbackError, Error } from 'mongoose'
import { EventModel } from '../models/nosql/event.model'
import {  IStorage, IEvent } from '../interfaces'
import {httpResponses} from "../utils";

class EventService {
    async GetEvents(_req: Request, res: Response) {
        await EventModel.find((err, result) => {
            if (err) {
                res.send(err)
            }
            return res.status(200).json({ ok: true, data: result })
        })
    }
    async GetEvent(req: Request, res: Response) {
        const { id, eventId } = req.params
        await EventModel.findOne(
            { id, eventId },
            (err: Error, result: IEvent) => {
                if (err) {
                    res.send(err)
                }
                return res.status(200).json({ ok: true, data: result })
            }
        )
    }
    async ChargeEventPicture(data: IStorage, res: Response): Promise<void> {
        const value: IEvent = {
            _id: data.fileOwner,
            mediaID: data._id,
        }
        await EventModel.updateOne(value._id,{mediaID:value.mediaID},(err:any,result:any)=>{
            if(err){
                return httpResponses(res,400,err.message.toString(),false)
            }
            return httpResponses(res,200,result,true)

        })
    }
    CreateEvent(req: Request, res: Response) {
        try {
            const event = matchedData(req)
            EventModel.create(
                { event },
                (err: CallbackError, result: IEvent) => {
                    if (err) {
                        res.status(400).json({ ok: false, Error: err })
                    }
                    res.status(200).send(result)
                }
            )
        } catch (error) {
            res.status(401).json({
                ok: false,
                error,
            })
        }
    }
}

export { EventService }
