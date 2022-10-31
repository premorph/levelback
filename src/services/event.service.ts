import { Request, Response } from 'express'
import { matchedData } from 'express-validator'
import { CallbackError, Error } from 'mongoose'
import { EventModel } from '../models/nosql/event.model'
import { IStorage, IEvent } from '../interfaces'
import { httpResponses } from '../utils'

class EventService {
    async GetEvents(_req: Request, res: Response) {
        await EventModel.find((err, result) => {
            if (err) {
                return httpResponses(res, 400, err.message.toString(), false)
            }
            return httpResponses(res, 200, result, true)
        })
    }
    async GetEvent(req: Request, res: Response) {
        const { id, eventId } = req.params
        await EventModel.findOne(
            { id, eventId },
            (err: Error, result: IEvent) => {
                if (err) {
                    return httpResponses(
                        res,
                        400,
                        err.message.toString(),
                        false
                    )
                }
                return httpResponses(res, 200, result, true)
            }
        )
    }
    async ChargeEventPicture(data: IStorage): Promise<void> {
        const value: IEvent = {
            _id: data.fileOwner,
            mediaID: data._id,
        }
        await EventModel.updateOne(
            value._id,
            { mediaID: value.mediaID },
            (err: any, result: any) => {
                if (err) {
                    return err
                }
                return result
            }
        )
    }
    CreateEvent(req: Request, res: Response) {
        try {
            const event = matchedData(req)
            EventModel.create(
                { event },
                (err: CallbackError, result: IEvent) => {
                    if (err) {
                        return httpResponses(
                            res,
                            400,
                            err.message.toString(),
                            false
                        )
                    }
                    return httpResponses(res, 200, result, true)
                }
            )
        } catch (err: any) {
            return httpResponses(res, 400, err.message.toString(), false)
        }
    }
}
export { EventService }
