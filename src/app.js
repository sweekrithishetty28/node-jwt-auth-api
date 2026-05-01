/******************************************************************
============================ app.js ===============================

Purpose:
Main Application File

Here we:
1. Load env variables
2. Connect DB
3. Add middlewares
4. Register routes
******************************************************************/

// Load .env values
require('dotenv').config();

const express = require('express');

// Import DB connection
const connectDB = require('./db/db');

// Import routes
const authRoutes = require('./routes/auth.routes');
const postRoutes = require('./routes/post.route');

// Middleware to read cookies
const cookieParser = require('cookie-parser');


// Connect MongoDB
connectDB();


// Create express app
const app = express();


/**************************************************************
Middleware

1. express.json()
Reads JSON body

2. cookieParser()
Reads cookies
**************************************************************/
app.use(express.json());
app.use(cookieParser());


/**************************************************************
Routes

/api/auth/register
/api/posts/create
**************************************************************/
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);


// Export app
module.exports = app;