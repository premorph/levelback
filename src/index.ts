import express from 'express'
import DB from './config/mongo/mongo.config'
import { SqlDB } from './config/sql/sql.config'
import { router } from './controllers'
import { logger } from './utils/logger.utils'
import { PORT, ENGINE } from './enviroments/env.enviroments'
import path from 'path'
import morganBody from 'morgan-body'
import { createWriteStream } from 'fs'
import cors from 'cors'
import bodyParser from 'body-parser'
import swaggerUI from 'swagger-ui-express'

import { openApiConfiguration } from './docs/swagger'
const app = express()
const port = PORT
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(express.json())
// app.use(express.urlencoded({extended:false}))
app.use(express.static('storage'))
app.use(
    '/documentation',
    swaggerUI.serve,
    swaggerUI.setup(openApiConfiguration)
)

const log = createWriteStream(path.join(__dirname, 'logs', 'express.log'), {
    flags: 'a',
})
morganBody(app, {
    noColors: false,
    stream: log,
})
app.use('/api/v1', router)

ENGINE === 'nosql' ? new DB().initialize() : new SqlDB().initialize()

app.listen(port, () => {
    console.clear()
    logger.info(`Server on port ${port}`)
})
