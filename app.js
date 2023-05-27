const express = require('express');
const chalk = require('chalk')
const debug = require('debug')
const morgan = require('morgan')
const app = express();


// Middleware
app.use(express.json());

app.use(morgan('combined'))

// Route Handler
app.get('/', (req, res) => {
  res.send('Hello, World!');

// Start the server
app.listen(4000, () => {
  debug('Listening on port 4000' + chalk.green(" : port"));
});
