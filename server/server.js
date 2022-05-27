require('dotenv').config();
const express = require('express');
const path = require('path');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const cookieParser = require('cookie-parser');
const credentials = require('./middleware/credentials');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const cors = require('cors');
const session = require('express-session');
const userRouter = require('./routes/userRoutes');
const transactionRouter = require('./routes/transactionRoutes');
const mongoSanitize = require('express-mongo-sanitize');
const dotenv = require('dotenv');
const app = express();

connectDB();

// custom middleware logger
app.use(logger);

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
// app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors());

app.options('*', cors());

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

app.use((req, res, next) => {
  console.log('middleware check');
  next();
});

// app.use(bodyParser.json());


// 3) ROUTES

app.use('/api/v1/users', userRouter);
app.use('/api/v1/transactions', transactionRouter);

app.get('/', function (req, res) {
  res.send({ status: 'success' });
});

app.all('*', (req, res) => {
  res.status(404);
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
  } else if (req.accepts('json')) {
    res.json({ error: '404 Not Found' });
  } else {
    res.type('txt').send('404 Not Found');
  }
});

app.use(errorHandler);
const port = process.env.PORT || 5001;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
