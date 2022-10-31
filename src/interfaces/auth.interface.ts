import { Request, Response } from 'express'

export interface ILogin {
    email: string
    password: string
}
export interface IRegister {
    name: string
    lastname: string
    email: string
    password: string
}
export interface AuthContract {
    Login(req: Request, res: Response): Promise<void>
    Register(req: Request, res: Response): Promise<void>
}
