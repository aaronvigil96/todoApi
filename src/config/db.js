import { createPool } from "mysql2/promise";
import 'dotenv/config';

export const pool = createPool({
    port: process.env.PORTDB,
    host: process.env.HOSTDB,
    user: process.env.USERDB,
    password: process.env.PASSDB,
    database: process.env.DATABASE
})