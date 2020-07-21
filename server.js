const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');

// Routes files
const auth = require('./routes/auth');
const test = require('./routes/authTest');
const expenses = require('./routes/expenses');
const deposit = require('./routes/deposit');
const meal = require('./routes/meal');
const calculation = require('./routes/calculation');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Database Connection
connectDB();

const app = express();


// Body parser
app.use(express.json());

// Cookie Parser
app.use(cookieParser());


// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routers
app.use('/api/auth', auth);
app.use('/api/test', test);
app.use('/api/expenses', expenses);
app.use('/api/deposit', deposit);
app.use('/api/meal', meal);
app.use('/api/calculation', calculation);

const PORT = process.env.PORT || 5000;

// Serve static asset in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

// Error handler
app.use(errorHandler);

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`));

// Handle Unhandled rejections
// eslint-disable-next-line no-unused-vars
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server and exit process
  server.close(() => process.exit(1));
});
