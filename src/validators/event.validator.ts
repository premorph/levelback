import { Request, Response, NextFunction } from 'express'
import { check } from 'express-validator'
import { validateResult } from '../utils/validator.utils'
const validatorCreateEvent = [
    check('name').exists().notEmpty(),
    check('image').exists().notEmpty(),
    check('dateEvent').exists().notEmpty(),
    check('author').exists().notEmpty(),
    (req: Request, res: Response, next: NextFunction) => {
        return validateResult(req, res, next)
    },
]

export { validatorCreateEvent }
