import express from 'express'
import DB from './config/mongo/mongo.config'
import { SqlDB } from './config/sql/sql.config'
import { router } from './controllers'
import { logger } from './utils/logger.utils'
import { PORT, ENGINE } from './enviroments/env.enviroments'

import bodyParser from 'body-parser'
const app = express()
const port = PORT

app.use('/api/v1/', router)
// app.use(express.json())
app.use(bodyParser.json())
app.use(express.urlencoded({extended:true}))
//app.use(express.bodyParser())
ENGINE === 'nosql' ? new DB().initialize() : new SqlDB().initialize()

app.listen(port, () => {
  console.clear()
  logger.info(`Server on port ${port}`)
})
