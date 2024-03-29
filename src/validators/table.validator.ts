import { check } from 'express-validator'
import { validateResult } from '../utils/validator.utils'
import { NextFunction, Request, Response } from 'express'

const validatorTable = [
    check('table_price').exists().notEmpty(),
    check('table_qty').exists().notEmpty(),
    check('table_category').exists().notEmpty(),
    check('table_map.table_label').exists().notEmpty(),
    check('tables.table_map.layour').exists().notEmpty(),
    check('tables.table_map.chairs').exists().notEmpty(),
    (req: Request, res: Response, next: NextFunction) => {
        return validateResult(req, res, next)
    },
]
export { validatorTable }
