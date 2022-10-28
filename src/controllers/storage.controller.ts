import { Router } from 'express'
import { uploadMiddleware } from '../utils/storage.utils'
import StorageService from '../services/storage.service'
import { validatorCreateStorage } from '../validators/storage.validator'

const router: Router = Router()
router.get('/', new StorageService().GetStorages)

router.post(
    '/',
    validatorCreateStorage,
    uploadMiddleware.single('levelFile'),
    new StorageService().CreateStorage
)
export { router }
