require(`dotenv`).config();

const pwd = process.env.PWD;

const { Pool } = require('pg');

const pool = new Pool({
  password: pwd,
  database: 'skills',
  port: 5432,
  host: 'localhost',
  user: 'postgres',
});

module.exports = pool;
