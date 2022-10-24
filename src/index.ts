import express from 'express'
import DB from './config/mongo/mongo.config'
import { SqlDB } from './config/sql/sql.config'
import { router } from './controllers'
import { logger } from './utils/logger.utils'
import { PORT, ENGINE } from './enviroments/env.enviroments'
<<<<<<< HEAD

import bodyParser from 'body-parser'
const app = express()
const port = PORT

app.use('/api/v1/', router)
// app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
//app.use(express.bodyParser())
=======
import path from 'path'
import morganBody from 'morgan-body'
import {createWriteStream} from 'fs'
import cors from 'cors'
import bodyParser from 'body-parser'
const app = express()
const port = PORT
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// app.use(express.json())
// app.use(express.urlencoded({extended:false}))
app.use(express.static("storage"));

const log= createWriteStream(
    path.join(__dirname,"logs","express.log"),{flags:"a"}
    );
morganBody(app,{
    noColors:false,
    stream:log
})
app.use('/api/v1', router)

>>>>>>> 0c243c1 (review controllers)
ENGINE === 'nosql' ? new DB().initialize() : new SqlDB().initialize()

app.listen(port, () => {
  console.clear()
  logger.info(`Server on port ${port}`)
})
