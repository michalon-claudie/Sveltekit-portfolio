import {createConnection} from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const connection = await createConnection({
  host: process.env.SECRET_DB_HOST,
  user: process.env.SECRET_DB_USER,
  password: process.env.SECRET_DB_PASSWORD,
  database: process.env.SECRET_DB_NAME,
});

export default connection;