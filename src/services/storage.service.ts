import { Request, Response } from 'express'
import { IStoragecontract, IStorage } from '../interfaces/storage.interface'
import { StorageModel } from '../models/nosql/storage.model'
import { matchedData } from 'express-validator'
import { CallbackError } from 'mongoose'
import { httpResponses } from '../utils/http.utils'
import fs from 'fs'
import {storageRedirector} from "../controllers/helper/storageRedirector.helper";
const MEDIA_PATH ="https://localhost:3001/";
class StorageService implements IStoragecontract {
   async CreateStorage(req: Request, res: Response): Promise<void> {
        const file = req.file
        const body = matchedData(req, {locations:['query']})
        const data = {
            filename: file?.filename,
            fileOwner: body.fileOwner,
            typeF: body.typeF,
        }
      await  StorageModel.create(
             data ,async(err: CallbackError, result: any) => {
                if (err)
                    return httpResponses(
                        res,
                        500,
                        ' STORAGE_RECORD_FAILED ',
                        false
                    )
             const redirector = await storageRedirector(res,data)

              return httpResponses(res,200,redirector,true)
            }
        )
    }
    GetStorages(req: Request, res: Response): void {
    StorageModel.find((err:CallbackError,result:IStorage[])=>{
        if(err)
        {
            return httpResponses(res,400,"Storages not found",false)
        }

        if(result.length<=0) {
            httpResponses(res,400,"Storages not found",false)
        }
        return res.status(200).json({
            ok:true,
            data:result
        })
       })
    }
    GetStorage(req: Request, res: Response): void {
      const {_id}=req.params
        StorageModel.find({_id},(err:CallbackError,result:IStorage)=>{
            if(err) return httpResponses(res,400,"Storages not found",false)
            return res.status(200).json({
                ok:true,
                data:result
            })
           })
    }
    DeleteStorage(req: Request, res: Response): void {
        try {
            const { id } = matchedData(req);
            const dataFile:any =  StorageModel.findById(id);
            const deleteResponse:any =  StorageModel.deleteOne({ _id: id })
            const filePath = `${MEDIA_PATH}/${dataFile.filename}`; //TODO c:/miproyecto/file-1232.png
             fs.unlinkSync(filePath);
            const data = {
                filePath,
                deleted: deleteResponse.matchedCount,
            };
                res.send(data)
          } catch (e) {
            // handleHttpError(res, "ERROR_DETAIL_ITEMS");
          }
        }
    UpdateStorage(req: Request, res: Response): void {
        throw new Error('Method not implemented.')
    }
}
export default StorageService

