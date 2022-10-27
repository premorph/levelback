import {  Response } from "express"

declare type status = 200 | 400 | 500
const httpResponses = (
  res: Response,
  status: status,
  data: any,
  ok:boolean
) => {
    
    res.status(status).send({ok,data:data})
}

export {httpResponses}