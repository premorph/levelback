import { Request, Response } from 'express'
import { AuthContract } from '../interfaces/auth.interface'
import { matchedData } from 'express-validator'
import { UserModel } from '../models/nosql/user.model'
import { comparation, encrypt, httpResponses } from '../utils'
import { CallbackError } from 'mongoose'
import { IUser } from '../interfaces'
import { SignJWT } from '../utils/jwt.utils'
class AuthService implements AuthContract {
    async Login(req: Request, res: Response): Promise<void> {
        try {
            const body = matchedData(req, { locations: ['body'] })
            const user = await UserModel.findOne({ email: body.email })
            if (!user) {
                return httpResponses(res, 400, 'LOGIN_INCORRECT', false)
            }
            const checkUser = await comparation(body.password, user.password)
            if (!checkUser) {
                return httpResponses(res, 400, 'LOGIN_INCORRECT', false)
            }
            user.set('password', null, { strict: false })
            return httpResponses(res, 400, user, true)
        } catch (e: any) {
            return httpResponses(res, 400, e.message.toString(), false)
        }
    }
    async Register(req: Request, res: Response): Promise<void> {
        try {
            const body = matchedData(req, { locations: ['body'] })
            const password = await encrypt(body.password)
            body.password = password
            await UserModel.create(
                body,
                async (err: CallbackError, result: IUser) => {
                    if (err) {
                        return httpResponses(
                            res,
                            400,
                            err.message.toString(),
                            false
                        )
                    }
                    const data = {
                        ...result,
                        token: await SignJWT(result),
                    }
                    result.password = ''
                    return httpResponses(res, 400, data, true)
                }
            )
        } catch (e: any) {
            return httpResponses(res, 400, e.message.toString(), false)
        }
    }
}

export default AuthService
