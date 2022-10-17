import { Request, Response } from 'express'
import { Error } from 'mongoose'
import { IEvent } from '../interfaces/Event.interface'
import { EventModel } from '../models'
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
    await EventModel.findOne({ id, eventId }, (err: Error, result: IEvent) => {
      if (err) {
        res.send(err)
      }
      return res.status(200).json({ ok: true, data: result })
    })
  }
}

export { EventService }
