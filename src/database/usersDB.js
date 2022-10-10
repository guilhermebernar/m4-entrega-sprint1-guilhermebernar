
import { Client } from "pg";

const database = new Client({
    user: "postgres",
    host: "localhost",
    database: "db_users",
    password: process.env.DB_PASSWORD,
    port: 5432,

});

export const startDatabase = async ()=>{
    await database.connect();
};

export default database;
