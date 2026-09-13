import { Pool } from "pg";
import "dotenv/config";

export const pool = new Pool ({
    user: "postgres",
    host: "localhost",
    database: "notes_db",
    password: process.env.DB_PASSWORD,
    port: 5432
});

