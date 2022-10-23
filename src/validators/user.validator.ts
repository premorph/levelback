import { NextFunction, Request, Response } from "express";
import { check } from "express-validator";
import { validateResult } from "../utils/validator.utils";

const ValidatorCreateUser =[
    check("name")
    .exists()
    .notEmpty()
    .isLength({min:3, max:99}),
    check("lastname")
    .exists()
    .notEmpty()
    .isLength({min:3, max:99}),
    check("password")
    .exists()
    .notEmpty()
    .isLength({min:3, max:15}),
    check("email")
    .exists()
    .notEmpty()
    .isEmail(),
    (req:Request, res:Response, next:NextFunction) => {
        return validateResult(req, res, next)
    }
]
export {ValidatorCreateUser}