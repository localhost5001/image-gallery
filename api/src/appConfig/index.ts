export const AppConfig = {
    dbHost: process.env.POSTGRES_HOST,
    dbName: process.env.POSTGRES_DB,
    dbUser: process.env.POSTGRES_USER,
    dbPwd: process.env.POSTGRES_PASSWORD,
    dbPort: parseInt(process.env.POSTGRES_PORT),
}
