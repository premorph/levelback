import { ENV, DB_URI } from './../../enviroments/env.enviroments'
import { dbConfig } from '../../interfaces'
import { connect } from 'mongoose'
import { logger } from '../../utils/logger.utils'

class DB implements dbConfig {
  db_uri: string
  constructor(readonly URI = DB_URI) {
    this.db_uri = URI
  }
  async initialize(): Promise<void> {
    try {
      await connect(this.db_uri, {}, (err) => {
        if (err) {
          logger.error(err)
        }
      })
      logger.info(`MONGO DB RUNNING IN ${ENV}`)
    } catch (error) {
      logger.error(error)
    }
  }
}

export default DB
