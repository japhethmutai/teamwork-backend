require('dotenv').config()

const { Pool } = require('pg')
const isProduction = process.env.NODE_ENV === 'production'

// don't try to load .env file on Heroku
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

// get the current environment
var env = process.env.NODE_ENV

// convert to uppercase
var envString = env.toUpperCase()

// access the environment variables for this environment
var DB_USER = process.env['DB_USER_' + envString]
var DB_PASSWORD = process.env['DB_PASSWORD_' + envString]
var DB_HOST = process.env['DB_HOST_' + envString]
var DB_PORT = process.env['DB_PORT_' + envString]
var DB_DATABASE = process.env['DB_DATABASE_' + envString]

const connectionString = `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`

const pool = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  ssl: isProduction,
})

module.exports = { pool }