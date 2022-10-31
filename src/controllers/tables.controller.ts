import { Router } from 'express'
import TableService from '../services/table.service'
import { validatorTable } from '../validators/table.validator'
const router: Router = Router()
router.get('/', new TableService().GetTemplates)
router.get('/:_id', new TableService().GetTemplate)
router.delete('', new TableService().DeleteTableTemplate)
router.put('/:_id', new TableService().UpdateTableTemplate)
router.post('/', validatorTable, new TableService().CreateTableTemplate)
export { router }
