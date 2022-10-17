import { ENGINE } from '../enviroments/env.enviroments'

const path = ENGINE === 'nosql' ? './nosql' : './sql'

export default {
  EventModel: import(`${path}/event.model.ts`),
  ReserveModel: import(`${path}/reserve.model.ts`),
  TableModel: import(`${path}/table.model.ts`),
}
