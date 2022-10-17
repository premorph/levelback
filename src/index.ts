import express from 'express'
import DB from './config/mongo/mongo.config'
import { SqlDB } from './config/sql/sql.config'
import { router } from './routes'
import { logger } from './utils/logger.utils'
import { PORT, ENGINE } from './enviroments/env.enviroments'
const app = express()
const port = PORT

app.use('/api/v1/', router)

ENGINE === 'nosql' ? new DB().initialize() : new SqlDB().initialize()

app.listen(port, () => {
  console.clear()
  logger.info(`Server on port ${port}`)
})
