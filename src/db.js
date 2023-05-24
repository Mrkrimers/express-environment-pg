const { Pool } = require('pg')

const pool = new Pool({
    password: '159alex951',
    database: 'skills',
    port: 5432,
    host: 'localhost',
    user: 'postgres'
})

module.exports = pool