import { Pool } from "pg";

export const conn = new Pool({
    port: 5432,
    database: "Todos",
    password: "root",
    host: "127.0.0.1",
    user: "postgres"
})