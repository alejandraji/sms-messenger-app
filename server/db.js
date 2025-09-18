import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;
console.log(process.env)
const pool = new Pool({
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT, 
  database: process.env.DB_DATABASE
});

const db = {
  query: (text, params) => pool.query(text, params)
};

export default db; 