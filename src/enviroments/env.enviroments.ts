import 'dotenv/config'
export const DB_URI = <string>process.env.DB_URI
export const MYSQL_HOST = <string>process.env.MYSQL_HOST

export const PORT = <string>process.env.PORT
export const SQL_CON = {
  database: <string>process.env.SQL_DB,
  username: <string>process.env.SQL_USERNAME,
  password: <string>process.env.SQL_PASSWORD,
}
export const SQL_HOST = {
  host: <string>process.env.SQL_HOST,
  dialect: <string>process.env.SQL_DIALECT,
}
export const ENGINE = <string>process.env.ENGINE
export const ENV = <string>process.env.NODE_ENV
