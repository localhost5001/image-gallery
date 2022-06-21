import { Pool } from 'pg'

import { AppConfig } from '../appConfig'

const pool = new Pool({
    host: AppConfig.dbHost,
    database: AppConfig.dbName,
    user: AppConfig.dbUser,
    password: AppConfig.dbPwd,
    port: AppConfig.dbPort,
})

const query = <T>(queryStr: string, params?: any[]) => pool.query<T>(queryStr, params)

export { 
    query
}
