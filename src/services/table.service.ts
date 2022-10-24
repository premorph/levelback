import { Request, Response } from 'express'
import { matchedData } from 'express-validator'
import { CallbackError } from 'mongoose'
import { TableModel } from '../models/nosql/table.model'
import { ITable } from '../interfaces'
import { httpResponses } from '../utils/http.utils'
class TableService {
    CreateTableTemplate(req: Request, res: Response) {
<<<<<<< HEAD
      try {
<<<<<<< HEAD
          console.log(req)
        //const body = matchedData(req.body)
       // const table = TableModel.create(body);
        //res.send(table)
=======
        const body = req;
           res.json(body)
//         const table = TableModel.create(body);
//         res.send(table)
>>>>>>> 0c243c1 (review controllers)
      } catch (error) {
        res.send(error)
      }
    }
    UpdateTableTemplate(req: Request, res: Response){
      try {
        const {id} =req.params
        let body =matchedData(req.body);
        body ={id,...body}
        const table = TableModel.findOneAndUpdate(body)
        res.send(table)
      } catch (error) {
        res.send(error)
      }
    }
    DeleteTableTemplate(req: Request, res: Response){
      try {
        const {id}= req.params;
        const table =TableModel.findByIdAndDelete({id})
        res.send(table)
      } catch (error) {
        res.send(error)
      }
    }
    async GetTemplates(_req: Request, res: Response){
      try {
         await TableModel.find((err:CallbackError,result:ITable[])=>{
             if(err) return httpResponses(res,400,"SOMETHING WENT WRONG",false)
             if(!result) return httpResponses(res,400,"NOT_RECORDS_FOUNDS",false)
             if(result.length!=0) return httpResponses(res,400,"NOT_RECORDS_FOUNDS",false)
        return res.send(result)
        })

      } catch (error) {
        res.send(error)
      }
    }
    async GetTemplate(req: Request, res: Response){
      try {
            const {_id} =req.params
              await TableModel.findOne({_id},(err:Error,result:Document)=>{
              if(err){
                res.send({ 
                  ok:false,
                  message:{text:"haven't records",
                err}
              })
            }
            res.send(result)
            })
          } catch (error) {
=======
        try {
            const body = req.body
            const table = TableModel.create(body)
            res.send(table)
        } catch (error) {
>>>>>>> 8cba15b (fixed json)
            res.send(error)
        }
    }
    UpdateTableTemplate(req: Request, res: Response) {
        try {
            const { id } = req.params
            let body = matchedData(req.body)
            body = { id, ...body }
            const table = TableModel.findOneAndUpdate(body)
            res.send(table)
        } catch (error) {
            res.send(error)
        }
    }
    DeleteTableTemplate(req: Request, res: Response) {
        try {
            const { id } = req.params
            const table = TableModel.findByIdAndDelete({ id })
            res.send(table)
        } catch (error) {
            res.send(error)
        }
    }
    async GetTemplates(_req: Request, res: Response) {
        try {
            await TableModel.find((err: CallbackError, result: ITable[]) => {
                if (err) {
                  return   httpResponses(res,400,"SOMETHING WENT WRONG",false)
                }
                if (result.length < 0) {
                  return   httpResponses(res,400,"NOT_RECORDS_FOUNDS",false)
                }
                return res.status(200).json(result)
            })
        } catch (error) {
           return res.send(error)
        }
    }
    async GetTemplate(req: Request, res: Response) {
        try {
            const { _id } = req.params
            await TableModel.findOne(
                { _id },
                (err: Error, result: Document) => {
                    if (err) {
                        res.send({
                            ok: false,
                            message: { text: "haven't records", err },
                        })
                    }
                    res.send(result)
                }
            )
        } catch (error) {
            res.send(error)
        }
    }
}
export default TableService
