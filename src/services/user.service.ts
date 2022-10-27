import { Request, Response } from 'express'
import { matchedData } from 'express-validator'
import { CallbackError } from 'mongoose'
import {IStorage,  UserContract} from '../interfaces'
import { UserModel } from '../models/nosql/user.model'
import {encrypt, httpResponses} from '../utils/'

class UserService implements UserContract {
    async CreateUser(req: Request, res: Response): Promise<void> {
        const body = matchedData(req, { locations: ['body'] })
        const passwordHash = await encrypt(body.password)
        body.password = passwordHash
        console.log(body)
        await UserModel.create(body, (err: any, result: any) => {
            if (err) {
                return res.send(err)
            }
            res.send(result)
        })
    }
    async ChargeProfile(data:IStorage,res:Response): Promise<void>{
    const user ={
        _id:data.fileOwner,
        avatar:data?._id
    }
        await UserModel.updateOne(user._id,{avatar:user.avatar},(err:any,result:any)=>{
            if(err){
                return httpResponses(res,400,err.message.toString(),false)
            }
            return httpResponses(res,200,result,true)

        })
    }
    async GetUsers(req: Request, res: Response): Promise<void> {
        const users: any = await UserModel.FindAllData()
        if (users.lenght <= 0) {
            res.send('error')
        }
        res.send(users)
    }
    async GetUser(req: Request, res: Response): Promise<void> {
        const { _id } = req.params
       const user= await UserModel.findOne({id:_id})
        res.send(user)
    }
    async UpdateUser(req: Request, res: Response): Promise<void> {
        const body = matchedData(req, { locations: ['body'] })
        const _id = matchedData(req, { locations: ['params'] })
        await UserModel.findOne(
            { _id },
            body,
            (err: CallbackError, result: any) => {
                if (err) {
                    res.send(err)
                }
                res.send(result)
            }
        )
    }
    DeleteUser(req: Request, res: Response): void {
        throw new Error('Method not implemented.')
    }
}
export { UserService }
