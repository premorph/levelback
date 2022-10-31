import {
    ENGINE,
    ENV,
    SQL_CON,
    SQL_HOST,
} from './../../enviroments/env.enviroments'
import { Sequelize } from 'sequelize'

import { ISqlConfig } from '../../interfaces'
import { logger } from '../../utils/logger.utils'

const sequelize = new Sequelize(
    SQL_CON.database,
    SQL_CON.username,
    SQL_CON.password,
    {
        host: SQL_HOST.host,
        dialect: 'mysql',
    }
)

class SqlDB implements ISqlConfig {
    async initialize(): Promise<void> {
        try {
            await sequelize.authenticate()
            logger.error(`SQLDB connected with the engine ${ENGINE} in ${ENV}`)
        } catch (error) {
            logger.error(error)
        }
    }
}
export { sequelize, SqlDB }
