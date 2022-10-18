import { Request, Response } from 'express'
import {matchedData} from 'express-validator'
import { Document, Error } from 'mongoose';
import { TableModel } from '../models/nosql/table.model'
class TableService {
    CreateTableTemplate(req: Request, res: Response) {
      try {
        const body = matchedData(req.body)
        const table = TableModel.create(body);
        res.send(table)
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
        const table = await  TableModel.find()
        if(table.length<0){
          res.send({
            ok:false,
            message:{text:"dont have records"}
          })
        }
        res.send(table)
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
            res.send(error)
        }
      }
  }
export default TableService
