CREATE TABLE IF NOT EXISTS Users (
	userId SERIAL PRIMARY KEY,
	firstName VARCHAR (50) NOT NULL,
    lastName VARCHAR (50) NOT NULL,
    email VARCHAR (50) NOT NULL,
    password VARCHAR (255) NOT NULL,
    gender VARCHAR(10) check (gender in ('Male', 'Female')),
    jobRole VARCHAR(10) check (jobRole in ('Admin', 'User')),
    department VARCHAR (100) NOT NULL,
    address VARCHAR (100) NOT NULL,
	createdOn TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (email)
	);

CREATE TABLE IF NOT EXISTS Gifs (
	gifId SERIAL PRIMARY KEY,
	image VARCHAR (50) NOT NULL,
    title VARCHAR (50) NOT NULL,
    flags INTEGER DEFAULT 0,
    userId INTEGER REFERENCES Users(userId) ON DELETE CASCADE,
	createdOn TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
	);

CREATE TABLE IF NOT EXISTS Articles (
	articleId SERIAL PRIMARY KEY,
	title VARCHAR (100) NOT NULL,
    article TEXT NOT NULL,
    flags INTEGER DEFAULT 0,
    userId INTEGER REFERENCES Users(userId),
	createdOn TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
	);

CREATE TABLE IF NOT EXISTS Category (
	categoryId SERIAL PRIMARY KEY,
	category VARCHAR (50) NOT NULL,
    articleId INTEGER REFERENCES Articles(articleId),
	createdOn TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
	);

CREATE TABLE IF NOT EXISTS ArticleComments (
	commentId SERIAL PRIMARY KEY,
	comment TEXT NOT NULL,
	flags INTEGER DEFAULT 0,
    articleId INTEGER REFERENCES Articles(articleId),
	createdOn TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
	);

CREATE TABLE IF NOT EXISTS GifComments (
	commentId SERIAL PRIMARY KEY,
	comment TEXT NOT NULL,
	flags INTEGER DEFAULT 0,
    gifId INTEGER REFERENCES Gifs(gifId),
	createdOn TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
	);