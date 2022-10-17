import { Router } from 'express'
import { EventService } from '../services'

const router: Router = Router()

router.get('/', new EventService().GetEvents)
router.get('/:eventId/:id', new EventService().GetEvent)

export { router }
