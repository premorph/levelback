import { query} from "express-validator";
import {NextFunction, Request, Response} from "express";
import {validateResult} from "../utils";

const validatorCreateStorage=[
    query('typeF').exists().notEmpty(),
    query('fileowner').exists().notEmpty(),
    (req:Request,res:Response,next:NextFunction)=>{
    return validateResult(req,res,next)
    }
]
export {validatorCreateStorage}