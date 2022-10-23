import { Request, Response } from 'express'
import { matchedData } from 'express-validator'
import { CallbackError } from 'mongoose'
import { UserContract } from '../interfaces'
import { UserModel } from '../models/nosql/user.model'
<<<<<<< HEAD
import { encrypt } from '../utils/'
=======
import { encrypt } from '../utils/bcrypt.utils'
>>>>>>> 8cba15b (fixed json)

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
    async GetUsers(req: Request, res: Response): Promise<void> {
        const users: any = await UserModel.find()
        if (users.lenght <= 0) {
            res.send('error')
        }
        res.send(users)
    }
    async GetUser(req: Request, res: Response): Promise<void> {
        const { _id } = req.params
        await UserModel.findOne({ _id }, (err: CallbackError, result: any) => {
            if (err) {
                res.send(err)
            }
            res.send(result)
        })
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
