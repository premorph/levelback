import { Router } from "express";
import TableService from "../services/table.service";

const router:Router=Router()
router.get('', new TableService().GetTemplates)
router.get('/:_id', new TableService().GetTemplate)
router.delete('' ,new TableService().DeleteTableTemplate)
router.put('/:_id', new TableService().UpdateTableTemplate)
router.post('', new TableService().CreateTableTemplate)
export{router}