require('dotenv').config()

const { Pool } = require('pg')
const isProduction = process.env.NODE_ENV === 'production'

// don't try to load .env file on Heroku
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

// get the current environment
var env = process.env.NODE_ENV

console.log(env);

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
  connectionString: connectionString
});

pool.on('connect', () => {
  console.log('connected to the database ' + DB_DATABASE);
});

pool.on('remove', () => {
    console.log('database disconnected successfully');
    process.exit(0);
  });

module.exports = pool