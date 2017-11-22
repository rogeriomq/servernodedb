import dotenv from 'dotenv'
dotenv.config()
import mysqlServer from 'mysql'
const connection = mysqlServer.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  socketPath: '/var/run/mysqld/mysqld.sock'
})

const errorHandler = (error, msg, rejectFunction) => {
  // console.error(error)
  rejectFunction({ error: msg })
}

import dbcontaFactory from './dbconta'
// export const dbcontaModule = dbcontaFactory({connection, errorHandler})
export const dbcontaModule = dbcontaFactory(connection)(errorHandler)
export default {
  contas: () => dbcontaModule
}
