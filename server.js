const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();


// Body parser
app.use(express.json());


// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.json({ message: 'Server setup okay' });
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`));

// Handle Unhandled rejections
// eslint-disable-next-line no-unused-vars
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server and exit process
  server.close(() => process.exit(1));
});
