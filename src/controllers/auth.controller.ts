import { Router } from 'express'
import AuthService from '../services/auth.service'
import { ValidateLogin, ValidateRegister } from '../validators/auth.validator'

const router: Router = Router()
router.post('/login', ValidateLogin, new AuthService().Login)
router.post('/register', ValidateRegister, new AuthService().Register)
export { router }
