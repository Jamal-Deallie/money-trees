const dotenv = require('dotenv');
require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/dbConn');
const cors = require('cors');
const userRouter = require('./routes/userRoutes');
const transactionRouter = require('./routes/transactionRoutes');
const mongoSanitize = require('express-mongo-sanitize');
const bodyParser = require('body-parser');

const app = express();

connectDB();

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
// app.use(credentials);

// Cross Origin Resource Sharing

const corsOpts = {
  origin: process.env.WEB_APP_URL,
  credentials: true,
  methods: ['GET', 'POST', 'HEAD', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type'],
  exposedHeaders: ['Content-Type'],
};
app.use(cors(corsOpts));

// built-in middleware to handle urlencoded form data
app.use(
  express.urlencoded({
    extended: true,
    limit: '25mb',
  })
);

app.use(express.json({ limit: '25mb' }));

app.use(bodyParser.json());
// built-in middleware for json
//middleware for cookies
app.use(cookieParser());

app.use((req, res, next) => {
  console.log('middleware check');
  next();
});

// 3) ROUTES

app.use('/api/v1/users', userRouter);
app.use('/api/v1/transactions', transactionRouter);

app.get('/', function (req, res) {
  res.send({ status: 'success' });
});

const port = process.env.PORT || 5001;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
