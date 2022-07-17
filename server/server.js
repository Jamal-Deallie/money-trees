const dotenv = require('dotenv');
require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/dbConn');
const userRouter = require('./routes/userRoutes');
const transactionRouter = require('./routes/transactionRoutes');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const app = express();
const cors = require('cors');
const xss = require('xss-clean');

connectDB();

app.use(
  cors({
    origin: process.env.WEB_APP_URL,
  })
);

app.use(helmet());
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ limit: '25mb' }));
app.use(cookieParser());
app.use(mongoSanitize());
app.use(xss());

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
