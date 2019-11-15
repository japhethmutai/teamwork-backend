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

/**
 * Create All Tables
 */
const createAllTables = () => {
  const queryText =
    `CREATE TABLE IF NOT EXISTS users (
      user_id SERIAL PRIMARY KEY,
      first_name VARCHAR (50) NOT NULL,
      last_name VARCHAR (50) NOT NULL,
      email VARCHAR (50) NOT NULL,
      password VARCHAR (255) NOT NULL,
      gender VARCHAR(10) check (gender in ('Male', 'Female')),
      job_role VARCHAR(10) check (job_role in ('Admin', 'User')),
      department VARCHAR (100) NOT NULL,
      address VARCHAR (100) NOT NULL,
      created_on TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      UNIQUE (email)
    );

    CREATE TABLE IF NOT EXISTS gifs (
      gif_id SERIAL PRIMARY KEY,
      image VARCHAR (50) NOT NULL,
      title VARCHAR (50) NOT NULL,
      flags INTEGER DEFAULT 0,
      user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
      created_on TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS articles (
      article_id SERIAL PRIMARY KEY,
      title VARCHAR (100) NOT NULL,
      article TEXT NOT NULL,
      flags INTEGER DEFAULT 0,
      user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
      created_on TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS category (
      categoryId SERIAL PRIMARY KEY,
      category VARCHAR (50) NOT NULL,
      article_id INTEGER REFERENCES articles(article_id) ON DELETE CASCADE,
      created_on TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS article_comments (
      comment_id SERIAL PRIMARY KEY,
      comment TEXT NOT NULL,
      flags INTEGER DEFAULT 0,
      article_id INTEGER REFERENCES articles(article_id) ON DELETE CASCADE,
      created_on TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS gif_comments (
      comment_id SERIAL PRIMARY KEY,
      comment TEXT NOT NULL,
      flags INTEGER DEFAULT 0,
      gif_id INTEGER REFERENCES gifs(gif_id) ON DELETE CASCADE,
      created_on TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    `;

  pool.query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
}

/**
 * Drop All Table
 */
const dropAllTables = () => {
  const queryText = 
    `
      DROP TABLE IF EXISTS gif_comments;
      DROP TABLE IF EXISTS article_comments;
      DROP TABLE IF EXISTS category;
      DROP TABLE IF EXISTS articles;
      DROP TABLE IF EXISTS gifs;
      DROP TABLE IF EXISTS users;
    `;
  pool.query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
}

pool.on('remove', () => {
  console.log('client removed');
  process.exit(0);
});


module.exports = {
  createAllTables,
  dropAllTables
};

require('make-runnable');