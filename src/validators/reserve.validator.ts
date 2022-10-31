import { NextFunction, Request, Response } from 'express'
import { validateResult } from '../utils/validator.utils'

const ValidatorCreateReserve = [
    (req: Request, res: Response, next: NextFunction) => {
        return validateResult(req, res, next)
    },
]

export { ValidatorCreateReserve }
