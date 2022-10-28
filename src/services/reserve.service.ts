import { Request, Response } from 'express'
import { matchedData } from 'express-validator'
import { CallbackError } from 'mongoose'
import { IReserveContract, IReserve } from '../interfaces/reserve.interface'
import { ReserveModel } from '../models/nosql/reserve.model'
import { httpResponses } from '../utils/http.utils'
import { IStorage } from '../interfaces'
class ReserveService implements IReserveContract {
    async createReserve(req: Request, res: Response): Promise<void> {
        const body = matchedData(req.body)
        await ReserveModel.create(body, (err: CallbackError, result: any) => {
            if (err) {
                return httpResponses(res, 400, err.message.toString(), false)
            }
            return httpResponses(res, 200, result, true)
        })
    }
    async chargeReservePayMedia(data: IStorage, res: Response): Promise<void> {
        const value: IReserve = {
            _id: data.fileOwner,
            imagePay: data._id,
        }
        await ReserveModel.updateOne(
            value._id,
            { imagePay: value.imagePay },
            (err: any, result: any) => {
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
    async GetReserves(_req: Request, res: Response): Promise<void> {
        try {
            await ReserveModel.find((err: CallbackError, result: IReserve) => {
                if (err) {
                    httpResponses(res, 400, err.message.toString(), false)
                }
                return httpResponses(res, 200, result, true)
            })
        } catch (error: any) {
            return httpResponses(res, 400, error.message.toString(), false)
        }
    }
    async GetReserve(req: Request, res: Response): Promise<void> {
        try {
            const { _id } = req.params
            await ReserveModel.findById(
                { _id },
                (err: CallbackError, result: IReserve) => {
                    if (err) {
                        httpResponses(res, 400, err.message.toString(), false)
                    }
                    return httpResponses(res, 200, result, true)
                }
            )
        } catch (error) {
            httpResponses(res, 400, 'Something went wrong', false)
        }
    }
    async DeleteReserve(req: Request, res: Response): Promise<void> {
        try {
            const { _id } = req.params
            await ReserveModel.findOneAndDelete(
                { _id },
                (err: CallbackError, result: IReserve) => {
                    if (err) {
                        httpResponses(res, 400, 'not records find', false)
                    }
                    res.status(200).json({
                        ok: true,
                        data: result,
                    })
                }
            )
        } catch (error) {
            httpResponses(res, 400, 'Something went wrong', false)
        }
    }
    async UpdateReserve(req: Request, res: Response): Promise<void> {
        try {
            const { _id } = req.params
            const body = matchedData(req.body)
            await ReserveModel.findOneAndUpdate(
                { _id },
                body,
                (err: CallbackError, result: IReserve) => {
                    if (err) {
                        httpResponses(res, 400, 'not records find', false)
                    }
                    res.status(200).json({
                        ok: true,
                        data: result,
                    })
                }
            )
        } catch (error) {
            httpResponses(res, 400, 'Something went wrong', false)
        }
    }
}
export { ReserveService }
