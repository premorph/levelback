import { Request, Response, NextFunction } from 'express'
import { matchedData } from 'express-validator'
import { Error } from 'mongoose'
import { IEvent } from '../interfaces/Event.interface'
import { EventModel } from '../models/nosql/event.model'

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
  CreateEvent(req: Request, res: Response, next: NextFunction) {
    try {
      const event = matchedData(req)
      const data = EventModel.create({ event }, (err, result) => {
        if (err) {
          return res.status(400).json({ ok: false, Error: err })
        }
        next(result)
      })
      res.status(200).send(data)
    } catch (error) {
      return res.status(401).json({
        ok: false,
        error,
      })
    }
  }
}

export { EventService }
