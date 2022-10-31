import { Types } from 'mongoose'
import { ITable } from './table.interface'
import { Request, Response } from 'express'

export interface IManageEvent {
    EventID: Types.ObjectId
    tables: ITable[]
}
export interface ManageEventContract {
    CreateManageEvent(req: Request, res: Response): void
    UpdateManageEvent(req: Request, res: Response): void
    GetManageEvent(req: Request, res: Response): void
    GetManageEvents(req: Request, res: Response): void
    DeleteManageEvents(req: Request, res: Response): void
    StatusManageEvents(req: Request, res: Response): void
}
