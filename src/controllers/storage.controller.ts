import { Router } from 'express';
import { uploadMiddleware } from '../utils/storage.utils';


const router:Router =Router()

router.post('',uploadMiddleware.single('myFile'))
export {router}