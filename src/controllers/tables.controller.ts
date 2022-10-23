import { Router } from "express";
import TableService from "../services/table.service";
import { validatorTable } from '../validators/table.validator'
const router:Router=Router()
router.get('/', new TableService().GetTemplates)
router.get('/:_id', new TableService().GetTemplate)
router.delete('' ,new TableService().DeleteTableTemplate)
router.put('/:_id', new TableService().UpdateTableTemplate)
<<<<<<< HEAD
router.post('/', validatorTable, new TableService().CreateTableTemplate)
=======
router.post('/', new TableService().CreateTableTemplate)
>>>>>>> 8cba15b (fixed json)
export{router}