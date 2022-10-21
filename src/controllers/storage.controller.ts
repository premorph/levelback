import { Router } from 'express';
import { uploadMiddleware } from '../utils/storage.utils';


const router:Router =Router()

<<<<<<< HEAD
router.post('',uploadMiddleware.single('levelFile'))
export {router}

=======
router.post('',uploadMiddleware.single('levelFile'),)
export {router}
>>>>>>> 283953e7c03520b77191853e7617d74d26b2450c
