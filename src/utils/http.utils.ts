import {  Response } from "express"

declare type status = 200 | 400 | 500
const httpResponses = (
  res: Response,
  status: status,
  message: string, 
  ok:boolean
) => {
    
    res.status(status).send({ok,message})
}

export {httpResponses}