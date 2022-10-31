import { check } from 'express-validator'
import { validateResult } from '../utils'
import { NextFunction, Request, Response } from 'express'

const ValidateLogin = [
    check('email').exists().notEmpty().isEmail(),
    check('password').exists().notEmpty(),
    (req: Request, res: Response, next: NextFunction) => {
        return validateResult(req, res, next)
    },
]
const ValidateRegister = [
    check('name').exists().notEmpty(),
    check('lastname').exists().notEmpty(),
    check('email').exists().notEmpty().isEmail(),
    check('password').exists().notEmpty(),
    (req: Request, res: Response, next: NextFunction) => {
        return validateResult(req, res, next)
    },
]

export { ValidateRegister, ValidateLogin }
