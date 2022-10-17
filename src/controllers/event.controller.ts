import { Router } from 'express'
import { EventService } from '../services'
import { validatorCreateEvent } from '../validators/event.validator'

const router: Router = Router()

router.get('/', new EventService().GetEvents)
router.get('/:eventId', new EventService().GetEvent)
router.post('/', validatorCreateEvent, new EventService().CreateEvent)
export { router }
// 04:4a:6c:4f:49:82
