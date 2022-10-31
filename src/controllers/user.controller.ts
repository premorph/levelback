import { Router } from 'express'
import { UserService } from '../services'
import {
    ValidateUpdateUser,
    ValidatorCreateUser,
    ValidatorUserID,
} from '../validators/user.validator'
import { Session } from '../middlewares/auth.middleware'
import { CheckRole } from '../middlewares'

const router: Router = Router()

router.get('/', [Session, CheckRole(['admin'])], new UserService().GetUsers)
router.get(
    '/:_id',
    [Session, CheckRole(['admin', 'user'])],
    ValidatorUserID,
    new UserService().GetUser
)
router.put(
    '/:_id',
    [Session, CheckRole(['admin', 'user'])],
    ValidateUpdateUser,
    new UserService().GetUser
)
router.delete(
    '/:_id',
    [Session, CheckRole(['admin'])],
    ValidatorUserID,
    new UserService().GetUser
)
router.post(
    '/',
    [Session, CheckRole(['admin'])],
    ValidatorCreateUser,
    new UserService().CreateUser
)

export { router }
