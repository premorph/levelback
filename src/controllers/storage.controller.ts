import { Router } from 'express';
import { uploadMiddleware } from '../utils/storage.utils';
import StorageService from '../services/storage.service'

const router:Router =Router()
router.get('/', new StorageService().GetStorages)

router.post('/',uploadMiddleware.single('levelFile'),)
export {router}

