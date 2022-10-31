import { Request, Response } from 'express'
import { Types } from 'mongoose'

export interface IReserve {
    author?: Types.ObjectId
    table?: string
    imagePay?: Types.ObjectId
    isValid?: boolean
    datePay?: Date
    dateCheck?: Date
    isCheck?: boolean
    checkauthor?: Types.ObjectId
    _id?: Types.ObjectId
}

export interface IReserveContract {
    createReserve(req: Request, res: Response): void
    GetReserves(req: Request, res: Response): void
    GetReserve(req: Request, res: Response): void
    DeleteReserve(req: Request, res: Response): void
    UpdateReserve(req: Request, res: Response): void
}
